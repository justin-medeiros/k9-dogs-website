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
        duration: 1.5,
        delay: 1,
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
    <div className="loading--overall--container">
      <motion.div
        className="loading--container"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
}
