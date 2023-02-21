import React from "react";
import "./About.css";
import data from "./../../../data.json";

export default function About() {
  const aboutText = data.about.text.split("\n");

  const aboutTextMap = aboutText.map((item, key) => {
    return (
      <div className="about--text" key={key}>
        {item}
        {key !== aboutText.length - 1 && <br />}
      </div>
    );
  });

  return (
    <div className="overall--container">
      <div className="about--container">
        <h1 className="about--title">About Us</h1>
        <div className="about--underline"></div>
        {aboutTextMap}
      </div>
      <img className="about--image" src="/images/about--us--image.JPEG"></img>
    </div>
  );
}
