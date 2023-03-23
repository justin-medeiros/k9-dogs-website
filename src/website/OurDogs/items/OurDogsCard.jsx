import React from "react";
import "./OurDogsCard.css";

export default function OurDogsCard() {
  return (
    <div className="ourdogs--card--overall--container">
      <div className="ourdogs--card--container">
        <div className="ourdogs--card--image--container">
          <img
            className="ourdogs--card--image"
            src="/images/image-gs.jpeg"
          ></img>
        </div>

        <div className="ourdogs--card--info">
          <div className="ourdogs--card--info--text">
            <div className="ourdogs--card--info--firstrow">
              <h1 className="ourdogs--card--name">
                V 24 (BSZS) IGP1 GEMMA VOM FRANKENGOLDEN
              </h1>
            </div>

            <div className="ourdogs--card--info--secondrow">
              <h2 className="ourdogs--card--dam--title">Dam</h2>
              <h2 className="ourdogs--card--sire--title">Sire</h2>
              <div className="ourdogs--card--sire--container"></div>
            </div>

            <div className="ourdogs--card--secondrow--text">
              <h2>V24( BSZS) Gemma Vom Frankengold IGP 1</h2>
              <h2>VA1 Oargos Dei Precision IGP 3 KKL</h2>
            </div>

            <div className="ourdogs--card--info--thirdrow">
              <h2 className="ourdogs--card--description--title">Description</h2>
            </div>
            <h2 className="ourdogs--card--description">
              TcjkncxczxczxjgkljgdfkljgfdklgjkldfjgkldfjgkldfgjklcjhnkzxchzxjchgfdjkjfjglkdfjgkfdjgklfdjdbvkjsdbvkjsdbvjkbdsjkvbsdkjvbsdTcjkncxczxczxjgkljgdfkljgfdklgjkldfjgkldfjgkldfgjklcjhnkzxchzxjchgfdjkjfjglkdfjgkfdjgklfd
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
