import React, { useEffect } from "react";
import "./About.css";
import data from "../../../data.json";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const controlText = useAnimation();
  const [refText, inViewText] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controlImage = useAnimation();
  const [refImage, inViewImage] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const aboutText = data.about.text.split("\n");

  const element = {
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

  const aboutTextMap = aboutText.map((item, key) => {
    return (
      <div className="about--text" key={key}>
        {item}
        {key !== aboutText.length - 1 && <br />}
      </div>
    );
  });

  useEffect(() => {
    if (inViewText) {
      controlText.start("animate");
    }

    if (inViewImage) {
      controlImage.start("animate");
    }
  }, [controlText, controlImage, inViewText, inViewImage]);

  return (
    <motion.div className="overall--container">
      <motion.div
        ref={refText}
        variants={element}
        initial="initial"
        animate={controlText}
        className="about--container"
      >
        <motion.h1 className="about--title">About Us</motion.h1>
        {aboutTextMap}
      </motion.div>
      <motion.img
        ref={refImage}
        variants={element}
        initial="initial"
        animate={controlImage}
        className="about--image"
        src="/images/about--us--image.JPEG"
      ></motion.img>
    </motion.div>
  );
}
