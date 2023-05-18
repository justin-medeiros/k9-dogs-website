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
    },
    animate: {
      opacity: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        when: "afterChildren",
      },
    },
  };

  const image = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  useEffect(() => {
    if (!animationComplete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [animationComplete]);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    !animationComplete && (
      <div className="loaded--overall--container">
        <motion.div
          className="loaded--container"
          initial="initial"
          animate="animate"
          variants={blackBox}
          onAnimationComplete={handleAnimationComplete}
        >
          <motion.div variants={imageContainer} className="loaded--logo">
            <motion.img
              src="images/logo.png"
              className="loaded--logo"
              variants={image}
            />
          </motion.div>
        </motion.div>
      </div>
    )
  );
}
