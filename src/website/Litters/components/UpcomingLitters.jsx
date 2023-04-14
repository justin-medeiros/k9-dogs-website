import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./UpcomingLitters.css";
import { motion } from "framer-motion";

function UpcomingLitters({ upcomingLittersData }) {
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

  const date = {
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
  return (
    <motion.div
      variants={content}
      animate="animate"
      initial="initial"
      className="upcoming--litters--overall--container"
    >
      <motion.div variants={date} className="upcoming--litters--container">
        <div className="upcoming--litters--container--text">
          <p className="upcoming--litters--title">New Litter Coming!</p>
          <p className="upcoming--litters--date">{upcomingLittersData.date}</p>
        </div>
      </motion.div>
      <motion.div variants={element} className="upcoming--litters--grid">
        <div className="upcoming--litters--first">
          <div className="upcoming--litters--image--container">
            <img
              className="upcoming--litters--image"
              src={upcomingLittersData.sire}
            ></img>
          </div>
          <h1>{upcomingLittersData.sire}</h1>
        </div>
        <div className="upcoming--litters--second">
          <div className="upcoming--litters--image--container">
            <img
              className="upcoming--litters--image"
              src={upcomingLittersData.damPhoto}
            ></img>
          </div>
          <h1>{upcomingLittersData.dam}</h1>
        </div>
      </motion.div>
      <div className="upcoming--litters--background"></div>
      <motion.div variants={element}>
        <Link to="/contact" className="upcoming--litters--contact">
          Contact us to reserve your puppy now!
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default memo(UpcomingLitters);
