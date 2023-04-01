import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
//import Home from "../website/Home/Home";
//import NavBar from "../website/NavBar/NavBar";
//import Footer from "../website/Footer/Footer";
import Gallery from "../website/Gallery/Gallery";
//import OurDogs from "../website/OurDogs/OurDogs";
import ContactUs from "../website/ContactUs/ContactUs";
import FAQ from "../website/FAQ/FAQ";
import Testimonials from "../website/Testimonials/Testimonials";
//import Litters from "../website/Litters/Litters";

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
import { motion, AnimatePresence } from "framer-motion";
import Loaded from "../website/LoadingScreen/Loaded";
function App() {
  const [isLoaded, setIsLoaded] = useState({
    dogsFetched: false,
    pastLittersFetched: false,
    upcomingLittersFetched: false,
  });
  const [ourDogs, setOurDogs] = useState([]);
  const [allPastLittersCards, setAllPastLittersCards] = useState();
  const [upcomingLitters, setUpcomingLitters] = useState();

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

  const Home = lazy(() => import("../website/Home/Home"));
  const NavBar = lazy(() => import("../website/NavBar/NavBar"));
  const Footer = lazy(() => import("../website/Footer/Footer"));
  // const Gallery = lazy(() => import("../website/Gallery/Gallery"));
  const OurDogs = lazy(() => import("../website/OurDogs/OurDogs"));
  //const ContactUs = lazy(() => import("../website/ContactUs/ContactUs"));
  //const FAQ = lazy(() => import("../website/FAQ/FAQ"));
  // const Testimonials = lazy(() =>
  //   import("../website/Testimonials/Testimonials")
  // );
  const Litters = lazy(() => import("../website/Litters/Litters"));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        {isLoaded.dogsFetched &&
        isLoaded.pastLittersFetched &&
        isLoaded.upcomingLittersFetched ? (
          <>
            <AnimatePresence mode="wait">
              <Loaded />
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
              </Routes>
              <Footer />
            </AnimatePresence>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </Router>
    </Suspense>
  );
}

export default App;
