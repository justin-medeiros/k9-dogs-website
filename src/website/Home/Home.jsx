import React from "react";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import HomeOurDogs from "./components/HomeOurDogs";
import HomeTestimonials from "./components/HomeTestimonials";
import "./Home.css";

export default function Home({ dogData }) {
  return (
    <div className="home--container">
      <HeroSection />
      <About />
      <HomeOurDogs homeDogData={dogData} />
      <HomeTestimonials />
    </div>
  );
}
