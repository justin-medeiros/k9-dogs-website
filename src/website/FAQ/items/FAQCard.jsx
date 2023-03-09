import React, { useState } from "react";
import { Collapse } from "react-collapse";
import "./FAQCard.css";

export default function FAQCard() {
  const [cardClicked, setCardClicked] = useState(false);
  const handleClick = () => {
    setCardClicked((prevClick) => !prevClick);
  };
  return (
    <div className="faq--card--container">
      <div
        className={`faq--card--top--section ${cardClicked ? "open" : "closed"}`}
        onClick={handleClick}
      >
        <h1 className="faq--card--title">1. Title</h1>
        <i
          className={
            cardClicked ? "fa-solid fa-square-minus" : "fa-solid fa-square-plus"
          }
        ></i>
      </div>
      <Collapse isOpened={cardClicked}>
        <div className="faq--card--text--container">
          <p className="faq--card--text">djihfkjgbdfjhbsdjhfvdshg</p>
        </div>
      </Collapse>
    </div>
  );
}
