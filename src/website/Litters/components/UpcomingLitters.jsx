import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./UpcomingLitters.css";

function UpcomingLitters({ upcomingLittersData }) {
  return (
    <>
      <div className="upcoming--litters--container">
        <div className="upcoming--litters--container--text">
          <p className="upcoming--litters--title">New Litter Coming!</p>
          <p className="upcoming--litters--date">{upcomingLittersData.date}</p>
        </div>
      </div>
      <div className="upcoming--litters--grid">
        <div className="upcoming--litters--first">
          <div className="upcoming--litters--image--container">
            <img
              className="upcoming--litters--image"
              src={upcomingLittersData.sire}
            ></img>
          </div>
          <h1>{upcomingLittersData.sire}</h1>
        </div>
        <div className="upcoming--litters--second">
          <div className="upcoming--litters--image--container">
            <img
              className="upcoming--litters--image"
              src={upcomingLittersData.damPhoto}
            ></img>
          </div>
          <h1>{upcomingLittersData.dam}</h1>
        </div>
      </div>
      <div className="upcoming--litters--background"></div>
      <Link to="/contact" className="upcoming--litters--contact">
        Contact us to reserve your puppy now!
      </Link>
    </>
  );
}

export default memo(UpcomingLitters);
