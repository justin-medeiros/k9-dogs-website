import React from "react";
import "./OurDogsCard.css";

export default function OurDogsCard({ dogInfo }) {
  return (
    <div className="ourdogs--card--overall--container">
      <div className="ourdogs--card--container">
        <div className="ourdogs--card--image--container">
          <img className="ourdogs--card--image" src={dogInfo.img}></img>
        </div>

        <div className="ourdogs--card--info">
          <div className="ourdogs--card--info--text">
            <div className="ourdogs--card--info--firstrow">
              <h1 className="ourdogs--card--name">{dogInfo.name}</h1>
            </div>

            <div className="ourdogs--card--info--secondrow">
              <h2 className="ourdogs--card--dam--title">Dam</h2>
              <h2 className="ourdogs--card--sire--title">Sire</h2>
              <div className="ourdogs--card--sire--container"></div>
            </div>

            <div className="ourdogs--card--secondrow--text">
              <h2>{dogInfo.dam}</h2>
              <h2>{dogInfo.sire}</h2>
            </div>

            <div className="ourdogs--card--info--thirdrow">
              <h2 className="ourdogs--card--description--title">Description</h2>
            </div>
            <h2 className="ourdogs--card--description">
              {dogInfo.description}
            </h2>
            <button className="ourdogs--card--card--btn">
              Click for more!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
