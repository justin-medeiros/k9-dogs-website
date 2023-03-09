import React from "react";
import "./ItemCard.css";

export default function ItemCard(props) {
  console.log(props.title);
  return (
    <div className="item--container" onClick={props.handleClick}>
      <img className="item--image" src="/images/test.png"></img>
      <h3 className="item--title">{props.title}</h3>
    </div>
  );
}
