import React, { useState } from "react";
import { Collapse } from "react-collapse";
import "./FAQCard.css";
import { motion } from "framer-motion";

export default function FAQCard(props) {
  const [cardClicked, setCardClicked] = useState(false);
  const handleClick = () => {
    setCardClicked((prevClick) => !prevClick);
  };
  const content = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      variants={content}
      initial="initial"
      animate="animate"
      className="faq--card--container"
    >
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
    </motion.div>
  );
}
