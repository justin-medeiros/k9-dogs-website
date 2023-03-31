import { async } from "@firebase/util";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { Facebook, Instagram } from "react-feather";
import { storage } from "../../firebase-config";
import UpcomingLitters from "./components/UpcomingLitters";
import PastLittersCard from "./items/PastLittersCard";
import "./Litters.css";

export default function Litters({ pastLittersData, upcomingLittersData }) {
  const allPastLitters = pastLittersData.map((data, id) => {
    return <PastLittersCard photos={data.photos} date={data.dates} key={id} />;
  });

  return (
    <div className="litters--container">
      <div className="litters--upcoming--container">
        <h1 className="litters--upcoming--title">Upcoming Litters</h1>
        {upcomingLittersData.isNewLitter ? (
          <UpcomingLitters upcomingLittersData={upcomingLittersData} />
        ) : (
          <div>
            <p className="litters--upcoming--subtitle">
              There are no upcoming litters at the moment. Please follow us on
              social media to stay up to date!
            </p>
            <div
              className="litters--upcoming--icons--container"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a
                href="https://www.instagram.com/clarotgermanshepherds/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  className="litters--upcoming--instagram--icon"
                  size={38}
                />
              </a>
              <a
                href="https://www.facebook.com/k9dogs.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  className="litters--upcoming--facebook--icon"
                  size={38}
                />
              </a>
            </div>
          </div>
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
        <p className="past--litters--subtitle">
          Have a look at our past litters!
        </p>
        <div className="past--litters--cards--container">{allPastLitters}</div>
      </div>
    </div>
  );
}
