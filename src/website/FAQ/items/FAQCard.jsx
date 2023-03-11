import React, { useState } from "react";
import { Collapse } from "react-collapse";
import "./FAQCard.css";

export default function FAQCard(props) {
  const [cardClicked, setCardClicked] = useState(false);
  const handleClick = () => {
    setCardClicked((prevClick) => !prevClick);
  };
  return (
    <div className="faq--card--container">
      <div
        className={`faq--card--top--section ${cardClicked && "open"}`}
        onClick={handleClick}
      >
        <h1 className={`faq--card--title ${cardClicked && "open"}`}>
          {props.data.title}
        </h1>
        <i
          className={
            cardClicked ? "fa-solid fa-square-minus" : "fa-solid fa-square-plus"
          }
        ></i>
      </div>
      <Collapse isOpened={cardClicked}>
        <div className="faq--card--text--container">
          <p className="faq--card--text">{props.data.body}</p>
        </div>
      </Collapse>
    </div>
  );
}
