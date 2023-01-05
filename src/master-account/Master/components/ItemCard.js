import React from "react";

export default function ItemCard(props) {
  return (
    <div className="item--container">
      <img className="item--image">{props.img}</img>
      <h3 className="item--text">{props.title}</h3>
    </div>
  );
}
