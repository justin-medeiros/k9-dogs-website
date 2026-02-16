"use client";

import Image from "next/image";
import "./HomeDogCard.css";

export default function HomeDogCard({ dogInfo }) {
  return (
    <div className="dogcard--overall--container">
      <div className="dogcard--container">
        <div className="dogcard--img--container">
          <Image
            className="dogcard--img"
            src={dogInfo.img}
            alt={dogInfo.name}
          />
        </div>
      </div>
      <div className="dogcard--text--container">
        <div>
          <div className="dogcard--title--container">
            <h1 className="dogcard--title">{dogInfo.name}</h1>
            <i
              className={
                dogInfo.gender === "M"
                  ? "fa-solid fa-mars"
                  : "fa-solid fa-venus"
              }
            ></i>
          </div>
          <div className="dogcard--text--line"></div>
          <p className="dogcard--text--about">
            {dogInfo.sire}
            <br />
            {dogInfo.dam}
          </p>
        </div>
        <a
          href={dogInfo.link}
          className="dogcard--btn--tag"
          target="_blank"
          rel="noreferrer"
        >
          <button className="dogcard--btn">Click More!</button>
        </a>
      </div>
    </div>
  );
}
