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
  const control = useAnimation();
  const [ref, inView] = useInView();
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

  const content = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

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

  useEffect(() => {
    if (inView) {
      control.start("animate");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={content}
      initial="initial"
      animate={control}
      className="home--dogs--overall--container"
    >
      <motion.h1
        ref={ref}
        variants={element}
        initial="initial"
        animate={control}
        className="home--dogs--title"
      >
        Our Dogs
      </motion.h1>
      <motion.div
        ref={ref}
        variants={element}
        initial="initial"
        animate={control}
        className="home--dogs--swiper--container"
      >
        <Slider {...settings}>{allDogCards}</Slider>
      </motion.div>

      <Link to="/ourdogs" className="home--dogs--see--more">
        <motion.div
          ref={ref}
          variants={element}
          initial="initial"
          animate={control}
        >
          Click to see more!
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default memo(HomeOurDogs);
