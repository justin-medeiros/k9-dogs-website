import React, { memo, useEffect, useRef } from "react";
import Slider from "react-slick";
import "./PastLittersCard.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function PastLittersCard({ photos, date }) {
  const sliderRef = useRef(null);
  const control = useAnimation();
  const [ref, inView] = useInView();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

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

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const pastLittersPhotos = photos.map((photoUrl, key) => {
    return (
      <div className="litters--card--image--container" key={key}>
        <img
          className="litters--card--image"
          src={photoUrl}
          loading="lazy"
        ></img>
      </div>
    );
  });

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
      className="litters--card--container"
    >
      <div className="litters--card--slider--container">
        <div className="slider--buttons--container">
          <div className="prev--button" onClick={handlePrevClick}>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="next--button" onClick={handleNextClick}>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>

        <Slider {...settings} ref={sliderRef}>
          {pastLittersPhotos}
        </Slider>
      </div>
      <div className="litters--card--dot--container"></div>
      <div className="litters--card--text--container">
        <p className="litters--date">{date}</p>
      </div>
    </motion.div>
  );
}

export default memo(PastLittersCard);
