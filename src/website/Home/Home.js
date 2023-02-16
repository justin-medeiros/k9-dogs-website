import React from "react";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
    </div>
  );
}
