import React from "react";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import OurDogs from "./components/OurDogs";
import Testimonials from "./components/Testimonials";
import "./Home.css";

export default function Home() {
  return (
    <div className="home--container">
      <HeroSection />
      <About />
      <OurDogs />
      <Testimonials />
    </div>
  );
}
