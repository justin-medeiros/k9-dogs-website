import React from "react";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import HomeOurDogs from "./components/HomeOurDogs";
import HomeTestimonials from "./components/HomeTestimonials";
import "./Home.css";
import { motion } from "framer-motion";

export default function Home({ dogData }) {
  return (
    <motion.div exit={{ opacity: 0 }} className="home--container">
      <HeroSection />
      <About />
      <HomeOurDogs homeDogData={dogData} />
      <HomeTestimonials />
    </motion.div>
  );
}
