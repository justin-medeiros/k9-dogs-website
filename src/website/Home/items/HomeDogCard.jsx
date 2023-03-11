import React from "react";
import "./HomeDogCard.css";

export default function DogCard(props) {
  console.log(props.dog.img);
  return (
    <div className="dogcard--overall--container">
      <div className="dogcard--container">
        <div className="dogcard--img--container">
          <img className="dogcard--img" src={props.dog.img}></img>
        </div>
      </div>
      <div className="dogcard--text--container">
        <div>
          <div className="dogcard--title--container">
            <h1 className="dogcard--title">{props.dog.name}</h1>
            <i
              className={
                props.dog.gender === "M"
                  ? "fa-solid fa-mars"
                  : "fa-solid fa-venus"
              }
            ></i>
          </div>
          <div className="dogcard--text--line"></div>
          <p className="dogcard--text--about">
            {props.dog.sire}
            <br />
            {props.dog.dam}
          </p>
        </div>
        <button className="dogcard--btn">Click More!</button>
      </div>
    </div>
  );
}
