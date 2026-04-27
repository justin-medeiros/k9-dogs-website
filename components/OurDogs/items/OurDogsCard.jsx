"use client";

import "./OurDogsCard.css";
import { ChevronRight } from "react-feather";

export default function OurDogsCard({ dogInfo }) {

  return (
    <div
      
      
      
      className="ourdogs--card--overall--container"
    >
      <div className="ourdogs--card--container">
        <div className="ourdogs--card--image--container">
          <img
            className="ourdogs--card--image"
            src={dogInfo.img}
            alt={dogInfo.name}
          />
        </div>

        <div className="ourdogs--card--info">
          <div className="ourdogs--card--info--firstrow">
            <h2 className="ourdogs--card--name">{dogInfo.name}</h2>
            {dogInfo.subtitle && (
              <p className="ourdogs--card--subtitle">{dogInfo.subtitle}</p>
            )}
          </div>

          <div className="ourdogs--card--parents--row">
            <div className="ourdogs--card--parent">
              <span className="ourdogs--card--parent--label">Dam</span>
              <span className="ourdogs--card--parent--value">
                {dogInfo.dam}
              </span>
            </div>
            <div className="ourdogs--card--parent">
              <span className="ourdogs--card--parent--label">Sire</span>
              <span className="ourdogs--card--parent--value">
                {dogInfo.sire}
              </span>
            </div>
          </div>

          <p className="ourdogs--card--description">{dogInfo.description}</p>

          <div className="ourdogs--card--btn-container">
            <a href={dogInfo.link} target="_blank" rel="noreferrer">
              <button className="ourdogs--card--card--btn">
                View Details <ChevronRight size={18} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
