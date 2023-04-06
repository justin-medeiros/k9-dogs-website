import React, { useEffect, useState } from "react";
import "./Loaded.css";
import { motion } from "framer-motion";

export default function Loaded() {
  const [animationComplete, setAnimationComplete] = useState(false);

  const blackBox = {
    initial: {
      height: "100vh",
      top: 0,
    },
    animate: {
      height: 0,
      top: "100vh",
      transition: {
        duration: 1,
        ease: [0.87, 0, 0.13, 1],
        when: "afterChildren",
      },
    },
  };

  const imageContainer = {
    initial: {
      opacity: 1,
      backgroundPositionY: "0%",
    },
    animate: {
      opacity: 0,
      backgroundPositionY: "100%",
      transition: {
        duration: 0.5,
        when: "afterChildren",
      },
    },
  };

  const image = {
    initial: {
      y: 0,
      filter: "grayscale(100%)",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1.5,
      filter: "grayscale(0%)",
      transition: {
        duration: 1,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  if (!animationComplete) {
    document.body.style.overflow = "hidden";
  }

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="loaded--overall--container">
      <motion.div
        className="loaded--container"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationComplete={handleAnimationComplete}
      >
        <motion.div variants={imageContainer}>
          <motion.img
            src="images/logo.png"
            className="loaded--logo"
            variants={image}
            style={{ fill: "url(#pattern)" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
