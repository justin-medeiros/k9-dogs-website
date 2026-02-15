import React, { useState } from "react";
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
import ScrollToTop from "../wrappers/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import Banner from "../components/Banner/Banner";
import dataJson from "../data.json";
import ourDogs from "../data/dogs.json";

function App() {
  const location = useLocation();

  const [bannerData, setBannerData] = useState(dataJson.banner);

  return (
    <>
      <ScrollToTop />
      <NavBar />
      {bannerData.showBanner && (
        <Banner bannerData={bannerData} setBannerData={setBannerData} />
      )}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home dogData={ourDogs} />}></Route>
          <Route
            path="/ourdogs"
            element={<OurDogs dogData={ourDogs} />}
          ></Route>
          <Route path="/litters" element={<Litters />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/testimonials" element={<Testimonials />}></Route>
          <Route path="/faq" element={<FAQ />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/news" element={<NewsFlash />}></Route>
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
