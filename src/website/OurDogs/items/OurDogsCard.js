import React from "react";
import "./OurDogsCard.css";

export default function OurDogsCard() {
  return (
    <div className="ourdogs--card--container">
      <div className="ourdogs--card--image--container">
        <img className="ourdogs--card--image" src="/images/image-gs.jpeg"></img>
      </div>

      <div className="ourdogs--card--info">
        <h1>Name</h1>
        <h2>Subtitle</h2>
        <p>About</p>
      </div>
    </div>
  );
}
