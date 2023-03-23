import React from "react";
import OurDogsCard from "./items/OurDogsCard";
import "./OurDogs.css";

export default function OurDogs() {
  return (
    <div className="ourdogs--container">
      <div className="ourdogs--top--container">
        <div className="ourdogs--title--container">
          <h1 className="ourdogs--title">Our Dogs</h1>
        </div>
        <h3 className="ourdogs--subtitle">Meet the stars of our kennel!</h3>
      </div>
      <div className="ourdogs--dogs--container">
        <OurDogsCard />
        <OurDogsCard />
        <OurDogsCard />
        <OurDogsCard />
      </div>
    </div>
  );
}
