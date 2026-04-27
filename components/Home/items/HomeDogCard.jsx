"use client";

import "./HomeDogCard.css";
import { ChevronRight } from "react-feather";

export default function HomeDogCard({ dogInfo }) {
  return (
    <div className="dogcard--overall--container">
      <div className="dogcard--card">
        <div className="dogcard--img--container">
          <img
            className="dogcard--img"
            src={dogInfo.img}
            alt={dogInfo.name}
          />
        </div>
        <div className="dogcard--info">
          <h2 className="dogcard--name">{dogInfo.name}</h2>
          {dogInfo.subtitle && (
            <p className="dogcard--subtitle">{dogInfo.subtitle}</p>
          )}
          <div className="dogcard--parents">
            <div className="dogcard--parent">
              <span className="dogcard--parent--label">Dam</span>
              <span className="dogcard--parent--value">{dogInfo.dam}</span>
            </div>
            <div className="dogcard--parent">
              <span className="dogcard--parent--label">Sire</span>
              <span className="dogcard--parent--value">{dogInfo.sire}</span>
            </div>
          </div>
          <div className="dogcard--btn-container">
            <a href={dogInfo.link} target="_blank" rel="noreferrer">
              <button className="dogcard--btn">
                View Details <ChevronRight size={16} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
