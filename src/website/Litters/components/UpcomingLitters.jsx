import React from "react";
import { Link } from "react-router-dom";
import "./UpcomingLitters.css";

export default function UpcomingLitters() {
  return (
    <>
      <div className="upcoming--litters--container">
        <p className="upcoming--litters--title">New Litter Coming!</p>
        <p className="upcoming--litters--date">August, 2020</p>
        <p className="upcoming--litters--quantity">1 Female and 4 Males</p>
      </div>
      <div className="upcoming--litters--grid">
        <div className="upcoming--litters--first">
          <div className="upcoming--litters--image--container">
            <img
              className="upcoming--litters--image"
              src="/images/gallery/dog1.jpeg"
            ></img>
          </div>
          <h1>Sire</h1>
        </div>
        <div className="upcoming--litters--second">
          <div className="upcoming--litters--image--container">
            <img
              className="upcoming--litters--image"
              src="/images/gallery/dog1.jpeg"
            ></img>
          </div>
          <h1>Dam</h1>
        </div>
      </div>
      <Link to="/contact" className="upcoming--litters--contact">
        Contact us to reserve your puppy now!
      </Link>
    </>
  );
}
