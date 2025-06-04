import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "../website/Home/Home";
import NavBar from "../website/NavBar/NavBar";
import Footer from "../website/Footer/Footer";
import Gallery from "../website/Gallery/Gallery";
import OurDogs from "../website/OurDogs/OurDogs";
import ContactUs from "../website/ContactUs/ContactUs";
import FAQ from "../website/FAQ/FAQ";
import Testimonials from "../website/Testimonials/Testimonials";
import Litters from "../website/Litters/Litters";
import NewsFlash from "../website/NewsFlash/NewsFlash";
import NewsPost from "../website/NewsPost/NewsPost";
import ScrollToTop from "../wrappers/ScrollToTop";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db, storage } from "../firebase-config";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { AnimatePresence } from "framer-motion";
import Loaded from "../website/LoadingScreen/Loaded";
import { SpinnerCircular } from "spinners-react";
import Banner from "../components/Banner/Banner";
function App() {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState({
    dogsFetched: false,
    pastLittersFetched: false,
    upcomingLittersFetched: false,
    bannerFetched: false,
  });
  const [ourDogs, setOurDogs] = useState([]);
  const [allPastLittersCards, setAllPastLittersCards] = useState();
  const [upcomingLitters, setUpcomingLitters] = useState();
  const [bannerData, setBannerData] = useState();

  // Get all dogs for home page and our dogs page
  useEffect(() => {
    async function getDogs() {
      const querySnapshot = await getDocs(
        query(collection(db, "dogs"), orderBy("id"))
      );
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
      const { prefixes } = await listAll(folderRef); // list all the folder
      prefixes.sort((a, b) => new Date(b.name) - new Date(a.name)); // sort descending order
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

  // Get upcoming litters data
  useEffect(() => {
    async function getBanner() {
      const docSnapshot = await getDoc(doc(db, "banner", "banner")); // Replace "document-id" with the ID of the document you want to fetch
      const bannerData = docSnapshot.data();
      setBannerData(bannerData);
      setIsLoaded((prevState) => ({
        ...prevState,
        bannerFetched: true,
      }));
    }
    getBanner();
  }, []);

  return (
    <>
      {isLoaded.dogsFetched &&
      isLoaded.pastLittersFetched &&
      isLoaded.upcomingLittersFetched &&
      isLoaded.bannerFetched ? (
        <>
          <Loaded />
          <ScrollToTop />
          <NavBar />
          {bannerData.showBanner && (
            <Banner
              description={bannerData.description}
              setBannerData={setBannerData}
            />
          )}
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home dogData={ourDogs} />}></Route>
              <Route
                path="/ourdogs"
                element={<OurDogs dogData={ourDogs} />}
              ></Route>
              <Route
                path="/litters"
                element={
                  <Litters
                    pastLittersData={allPastLittersCards}
                    upcomingLittersData={upcomingLitters}
                  />
                }
              ></Route>
              <Route path="/gallery" element={<Gallery />}></Route>
              <Route path="/testimonials" element={<Testimonials />}></Route>
              <Route path="/faq" element={<FAQ />}></Route>
              <Route path="/contact" element={<ContactUs />}></Route>
              <Route path="/news" element={<NewsFlash />}></Route>
              <Route path="/news/:id" element={<NewsPost />}></Route>
            </Routes>
          </AnimatePresence>
          <Footer />
        </>
      ) : (
        <div className="app--container">
          <SpinnerCircular color="red" size={200} />
        </div>
      )}
    </>
  );
}

export default App;
