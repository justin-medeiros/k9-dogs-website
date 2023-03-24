import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MasterLogin from "../master-account/MasterLogin/MasterLogin";
import ForgotPassword from "../master-account/ForgotPassword/ForgotPassword";
import Master from "../master-account/Master/Master";
import AddDogs from "../master-account/MasterEdit/Adds/AddDogs/AddDogs";
import AddPuppies from "../master-account/MasterEdit/Adds/AddPuppies/AddPuppies";
import AddPhotos from "../master-account/MasterEdit/Adds/AddPhotos/AddPhotos";
import Home from "../website/Home/Home";
import NavBar from "../website/NavBar/NavBar";
import Footer from "../website/Footer/Footer";
import Gallery from "../website/Gallery/Gallery";
import OurDogs from "../website/OurDogs/OurDogs";
import ContactUs from "../website/ContactUs/ContactUs";
import FAQ from "../website/FAQ/FAQ";
import Testimonials from "../website/Testimonials/Testimonials";
import Litters from "../website/Litters/Litters";
import ScrollToTop from "../wrappers/ScrollToTop";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db, storage } from "../firebase-config";
import { getDownloadURL, listAll, ref } from "firebase/storage";

function App() {
  const [isLoaded, setIsLoaded] = useState({
    dogsFetched: false,
    pastLittersFetched: false,
    upcomingLittersFetched: true,
  });
  const [ourDogs, setOurDogs] = useState([]);
  const [allPastLittersCards, setAllPastLittersCards] = useState();
  const [upcomingLitters, setUpcomingLitters] = useState();

  // Get all dogs for home page and our dogs page
  useEffect(() => {
    async function getDogs() {
      const querySnapshot = await getDocs(collection(db, "dogs"));
      const allDogs = querySnapshot.docs.map((doc) => {
        return doc.data();
      });
      setOurDogs(allDogs);
      setIsLoaded((prevState) => ({
        ...prevState,
        dogsFetched: true,
      }));
    }
    getDogs();
  }, []);

  // Get all past litters
  useEffect(() => {
    async function getFilesInFolder() {
      const folderRef = ref(storage, "past-litters");
      const { prefixes } = await listAll(folderRef); // list all the folders
      prefixes.sort((a, b) => b.name.localeCompare(a.name)); // sort descending order
      const folderNames = prefixes.map((folderRef) => folderRef.name); // get all folder names
      let allPastLitterCardsArr = []; // temp array to store pastLitterCards
      for (let i in folderNames) {
        const litterFolderRef = ref(storage, `past-litters/${folderNames[i]}`);
        const { items } = await listAll(litterFolderRef);
        const litterPhotos = await Promise.all(
          items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            return url;
          })
        );

        allPastLitterCardsArr.push({
          photos: litterPhotos,
          dates: folderNames[i],
        });
      }

      setAllPastLittersCards(allPastLitterCardsArr);
      setIsLoaded((prevState) => ({
        ...prevState,
        pastLittersFetched: true,
      }));
    }

    getFilesInFolder();
  }, []);

  // Get upcoming litters data
  useEffect(() => {
    async function getUpcomingLitters() {
      const docSnapshot = await getDoc(doc(db, "litters", "upcoming-litters")); // Replace "document-id" with the ID of the document you want to fetch
      const upcomingLittersData = docSnapshot.data();
      setUpcomingLitters(upcomingLittersData);
      setIsLoaded((prevState) => ({
        ...prevState,
        upcomingLittersFetched: true,
      }));
    }
    getUpcomingLitters();
  }, []);

  return (
    <Router>
      {isLoaded.dogsFetched &&
      isLoaded.pastLittersFetched &&
      isLoaded.upcomingLittersFetched ? (
        <>
          <ScrollToTop />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home dogData={ourDogs} />}></Route>
            <Route
              path="/ourdogs"
              element={<OurDogs dogData={ourDogs} />}
            ></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route
              path="/litters"
              element={
                <Litters
                  pastLittersData={allPastLittersCards}
                  upcomingLittersData={upcomingLitters}
                />
              }
            ></Route>
            <Route path="/testimonials" element={<Testimonials />}></Route>
            <Route path="/faq" element={<FAQ />}></Route>
            <Route path="/contact" element={<ContactUs />}></Route>
            <Route path="/master" element={<MasterLogin />}></Route>
            <Route path="/reset" element={<ForgotPassword />} />
            {/* <Route path="/master-edit" element={<Master />} />
      <Route path="/master-edit/addkennel" element={<AddDogs />} />
      <Route path="/master-edit/addpuppies" element={<AddPuppies />} />
      <Route path="/master-edit/addphotos" element={<AddPhotos />} /> */}
          </Routes>
          <Footer />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </Router>
  );
}

export default App;
