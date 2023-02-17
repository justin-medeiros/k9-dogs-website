import React from "react";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import OurDogs from "./components/OurDogs";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <OurDogs />
    </div>
  );
}
