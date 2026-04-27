"use client";

import { memo } from "react";
import Link from "next/link";
import "./UpcomingLitters.css";

function UpcomingLitters({ upcomingLittersData }) {
  return (
    <div className="upcoming--litters--overall--container">
      <div className="upcoming--litters--container">
        <div className="upcoming--litters--container--text">
          <p className="upcoming--litters--title">
            Very excited to announce the arrival of our new litter.
          </p>
          <p className="upcoming--litters--date">{upcomingLittersData.date}</p>
        </div>
      </div>
      <div className="upcoming--litters--background">
        <div className="upcoming--litters--grid">
          <div className="upcoming--litters--second">
            <div className="upcoming--litters--image--container">
              <img
                className="upcoming--litters--image"
                src={upcomingLittersData.damPhoto}
                alt={`Dam: ${upcomingLittersData.dam}`}
              />
            </div>
            <h1>Dam: {upcomingLittersData.dam}</h1>
            {upcomingLittersData.damSecondaryText !== "" && (
              <h1>{upcomingLittersData.damSecondaryText}</h1>
            )}
          </div>
          <div className="upcoming--litters--first">
            <div className="upcoming--litters--image--container">
              <img
                className="upcoming--litters--image"
                src={upcomingLittersData.sirePhoto}
                alt={`Sire: ${upcomingLittersData.sire}`}
              />
            </div>
            <h1>Sire: {upcomingLittersData.sire}</h1>
            {upcomingLittersData.sireSecondaryText !== "" && (
              <h1>{upcomingLittersData.sireSecondaryText}</h1>
            )}
          </div>
        </div>
        <div>
          <Link href="/contact" className="upcoming--litters--contact">
            Contact us to reserve your puppy now!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(UpcomingLitters);
