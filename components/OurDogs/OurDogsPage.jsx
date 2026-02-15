"use client";

import OurDogsCard from "./items/OurDogsCard";
import "./OurDogs.css";
import { motion } from "framer-motion";

export default function OurDogsPage({ dogData }) {
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

  const content = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const allDogCards = dogData.map((data) => {
    return (
      <div key={data.name}>
        <OurDogsCard dogInfo={data} />
      </div>
    );
  });

  return (
    <motion.div
      variants={content}
      animate="animate"
      initial="initial"
      className="ourdogs--container"
    >
      <motion.div className="ourdogs--top--container">
        <motion.div
          variants={element}
          animate="animate"
          initial="initial"
          className="ourdogs--title--container"
        >
          <h1 className="ourdogs--title">Our Dogs</h1>
        </motion.div>
        <motion.h3
          variants={element}
          animate="animate"
          initial="initial"
          className="ourdogs--subtitle"
        >
          Meet the stars of our kennel!
        </motion.h3>
      </motion.div>
      <motion.div variants={element} className="ourdogs--dogs--container">
        {allDogCards}
      </motion.div>
    </motion.div>
  );
}
