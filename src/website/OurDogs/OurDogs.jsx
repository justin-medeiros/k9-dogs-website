import React from "react";
import OurDogsCard from "./items/OurDogsCard";
import "./OurDogs.css";

export default function OurDogs() {
  return (
    <div className="ourdogs--container">
      <h1 className="ourdogs--title">Our Dogs</h1>
      <h3 className="ourdogs--subtitle">Meet the stars of our kennel</h3>
      <div className="ourdogs--dogs--container">
        <OurDogsCard />
      </div>
    </div>
  );
}
