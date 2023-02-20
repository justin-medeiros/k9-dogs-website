import React from "react";
import "./DogCard.css";

export default function DogCard() {
  return (
    <div className="dogcard--overall--container">
      <div className="dogcard--container">
        <div className="dogcard--img--container">
          <img className="dogcard--img" src="/images/image-gs.jpeg"></img>
        </div>
      </div>
      <div className="dogcard--text--container">
        <div className="dogcard--title--container">
          <h1 className="dogcard--title">VA2 Ivey dei Precision IGP 2</h1>
          <i
            className="fa-solid fa-mars"
            style={{
              fontSize: "26px",
              color: "var(--red)",
            }}
          ></i>
        </div>

        <h1 className="dogcard--subtitle">VA2 IPO2, KKL1</h1>
        <div className="dogcard--text--line"></div>
        <p className="dogcard--text--about">
          jkdbchjhjsbddnchbdhcbjh cbchjb jhsabch jasbchsabcab
        </p>
        <button className="dogcard--btn">Click More!</button>
      </div>
    </div>
  );
}
