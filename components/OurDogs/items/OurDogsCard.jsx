"use client";

import { useEffect } from "react";
import "./OurDogsCard.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronRight } from "react-feather";
import Image from "next/image";

export default function OurDogsCard({ dogInfo }) {
  const control = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  useEffect(() => {
    if (inView) {
      control.start("animate");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={element}
      initial="initial"
      animate={control}
      className="ourdogs--card--overall--container"
    >
      <div className="ourdogs--card--container">
        <div className="ourdogs--card--image--container">
          <Image
            className="ourdogs--card--image"
            src={dogInfo.img}
            alt={dogInfo.name}
          />
        </div>

        <div className="ourdogs--card--info">
          <div className="ourdogs--card--info--firstrow">
            <h2 className="ourdogs--card--name">{dogInfo.name}</h2>
            {dogInfo.subtitle && (
              <p className="ourdogs--card--subtitle">{dogInfo.subtitle}</p>
            )}
          </div>

          <div className="ourdogs--card--parents--row">
            <div className="ourdogs--card--parent">
              <span className="ourdogs--card--parent--label">Dam</span>
              <span className="ourdogs--card--parent--value">
                {dogInfo.dam}
              </span>
            </div>
            <div className="ourdogs--card--parent">
              <span className="ourdogs--card--parent--label">Sire</span>
              <span className="ourdogs--card--parent--value">
                {dogInfo.sire}
              </span>
            </div>
          </div>

          <p className="ourdogs--card--description">{dogInfo.description}</p>

          <div className="ourdogs--card--btn-container">
            <a href={dogInfo.link} target="_blank" rel="noreferrer">
              <button className="ourdogs--card--card--btn">
                View Details <ChevronRight size={18} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
