import React, { useState } from "react";
import UpcomingLitters from "./components/UpcomingLitters";
import PastLittersCard from "./items/PastLittersCard";
import "./Litters.css";

export default function Litters() {
  const [upcomingLitters, setUpcomingLitters] = useState(true);

  return (
    <div className="litters--container">
      <div className="litters--upcoming--container">
        <h1 className="litters--upcoming--title">Upcoming Litters</h1>
        <div className="litters--upcoming--title--underline"></div>
        {upcomingLitters ? (
          <UpcomingLitters />
        ) : (
          <p className="litters--upcoming--subtitle">
            There are no upcoming litters at the moment. Please follow us on
            social media to stay up to date!
          </p>
        )}
      </div>
      <div className="arrow--divider">
        <svg
          className="arrow--svg"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="past--litters--container">
        <h1 className="past--litters--title">Past Litters</h1>
        <div className="past--litters--underline"></div>
        <p className="past--litters--subtitle">
          Have a look at our past litters!
        </p>
        <div className="past--litters--cards--container">
          <PastLittersCard />
          <PastLittersCard />
          <PastLittersCard />
        </div>
      </div>
    </div>
  );
}
