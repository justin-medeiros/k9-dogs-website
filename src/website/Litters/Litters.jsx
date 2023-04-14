import { async } from "@firebase/util";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { Facebook, Instagram } from "react-feather";
import { storage } from "../../firebase-config";
import UpcomingLitters from "./components/UpcomingLitters";
import PastLittersCard from "./items/PastLittersCard";
import "./Litters.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Litters({ pastLittersData, upcomingLittersData }) {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const element = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.0,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const elementScroll = {
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

  const allPastLitters = pastLittersData.map((data, id) => {
    return <PastLittersCard photos={data.photos} date={data.dates} key={id} />;
  });

  useEffect(() => {
    if (inView) {
      control.start("animate");
    }
  }, [control, inView]);

  return (
    <motion.div exit={{ opacity: 0 }}>
      <motion.div
        variants={content}
        animate="animate"
        initial="initial"
        className="litters--container"
      >
        <motion.div variants={content} className="litters--upcoming--container">
          <motion.h1
            variants={element}
            animate="animate"
            initial="initial"
            className="litters--upcoming--title"
          >
            Upcoming Litters
          </motion.h1>
          {upcomingLittersData.isNewLitter ? (
            <UpcomingLitters upcomingLittersData={upcomingLittersData} />
          ) : (
            <div>
              <motion.p
                variants={element}
                animate="animate"
                initial="initial"
                className="litters--upcoming--subtitle"
              >
                There are no upcoming litters at the moment. Please follow us on
                social media to stay up to date!
              </motion.p>
              <motion.div
                variants={element}
                animate="animate"
                initial="initial"
                className="litters--upcoming--icons--container"
                target="_blank"
                rel="noopener noreferrer"
              >
                <a
                  href="https://www.instagram.com/clarotgermanshepherds/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram
                    className="litters--upcoming--instagram--icon"
                    size={38}
                  />
                </a>
                <a
                  href="https://www.facebook.com/k9dogs.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook
                    className="litters--upcoming--facebook--icon"
                    size={38}
                  />
                </a>
              </motion.div>
            </div>
          )}
        </motion.div>
        <div className="arrow--divider">
          <svg
            className="arrow--svg"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <motion.div variants={content} className="past--litters--container">
          <motion.h1
            ref={ref}
            variants={elementScroll}
            initial="initial"
            animate={control}
            className="past--litters--title"
          >
            Past Litters
          </motion.h1>
          <motion.p
            ref={ref}
            variants={elementScroll}
            initial="initial"
            animate={control}
            className="past--litters--subtitle"
          >
            Have a look at our past litters!
          </motion.p>
          <motion.div
            ref={ref}
            variants={elementScroll}
            initial="initial"
            animate={control}
            className="past--litters--cards--container"
          >
            {allPastLitters}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
