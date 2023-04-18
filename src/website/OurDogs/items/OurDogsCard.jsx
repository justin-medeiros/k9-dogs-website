import React, { useEffect } from "react";
import "./OurDogsCard.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function OurDogsCard({ dogInfo }) {
  const control = useAnimation();
  const [ref, inView] = useInView();

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
          <img className="ourdogs--card--image" src={dogInfo.img}></img>
        </div>

        <div className="ourdogs--card--info">
          <div className="ourdogs--card--info--firstrow">
            <h1 className="ourdogs--card--name">{dogInfo.name}</h1>
            {dogInfo.subtitle && (
              <h1 className="ourdogs--card--subtitle">{dogInfo.subtitle}</h1>
            )}
          </div>

          <div className="ourdogs--card--info--secondrow">
            <h2 className="ourdogs--card--dam--title">Dam</h2>
            <h2 className="ourdogs--card--sire--title">Sire</h2>
            <div className="ourdogs--card--sire--container"></div>
          </div>

          <div className="ourdogs--card--secondrow--text">
            <h2 className="ourdogs---card--dam">{dogInfo.dam.slice(5)}</h2>
            <h2 className="ourdogs---card--sire">{dogInfo.sire.slice(6)}</h2>
          </div>

          <div className="ourdogs--card--info--thirdrow">
            <h2 className="ourdogs--card--description--title">Description</h2>
          </div>
          <div className="ourdogs--card--desc--container">
            <h2 className="ourdogs--card--description">
              {dogInfo.description}
            </h2>
            <a href={dogInfo.link} target="_blank" rel="noreferrer">
              <button className="ourdogs--card--card--btn" href="">
                Click for more!
              </button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
