import React, { memo, useEffect, useState } from "react";
import "./HomeOurDogs.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import HomeDogCard from "../items/HomeDogCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function HomeOurDogs({ homeDogData }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const controlTitle = useAnimation();
  const [refTitle, inViewTitle] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controlContainer = useAnimation();
  const [refContainer, inViewContainer] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controlButton = useAnimation();
  const [refButton, inViewButton] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inViewTitle) {
      controlTitle.start("animate");
    }

    if (inViewContainer) {
      controlContainer.start("animate");
    }

    if (inViewButton) {
      controlButton.start("animate");
    }
  }, [
    controlTitle,
    controlContainer,
    controlButton,
    inViewTitle,
    inViewContainer,
    inViewButton,
  ]);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  useEffect(() => {
    if (windowWidth < 865) {
      setSlidesToShow(1);
    } else if (windowWidth < 960) {
      setSlidesToShow(2);
    } else if (windowWidth < 1150) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  }, [windowWidth]);

  const allDogCards = homeDogData.map((data, id) => {
    return (
      <div key={id}>
        <HomeDogCard dogInfo={data} />
      </div>
    );
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <button className="next--button">Next</button>,
    prevArrow: <button className="prev--button">Previous</button>,
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

  return (
    <div className="home--dogs--overall--container">
      <motion.h1
        ref={refTitle}
        variants={element}
        initial="initial"
        animate={controlTitle}
        className="home--dogs--title"
      >
        Our Dogs
      </motion.h1>
      <motion.div
        ref={refContainer}
        variants={element}
        initial="initial"
        animate={controlContainer}
        className="home--dogs--swiper--container"
      >
        <Slider {...settings}>{allDogCards}</Slider>
      </motion.div>

      <Link to="/ourdogs" className="home--dogs--see--more">
        <motion.div
          ref={refButton}
          variants={element}
          initial="initial"
          animate={controlButton}
        >
          Click to see more!
        </motion.div>
      </Link>
    </div>
  );
}

export default memo(HomeOurDogs);
