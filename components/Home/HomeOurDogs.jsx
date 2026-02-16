"use client";

import { memo, useEffect } from "react";
import "./HomeOurDogs.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import HomeDogCard from "./items/HomeDogCard";
import { ChevronRight } from "react-feather";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function HomeOurDogs({ homeDogData }) {
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
    if (inViewTitle) controlTitle.start("animate");
    if (inViewContainer) controlContainer.start("animate");
    if (inViewButton) controlButton.start("animate");
  }, [
    controlTitle,
    controlContainer,
    controlButton,
    inViewTitle,
    inViewContainer,
    inViewButton,
  ]);

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
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <button className="next--button">Next</button>,
    prevArrow: <button className="prev--button">Previous</button>,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 865,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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

      <motion.div
        ref={refButton}
        variants={element}
        initial="initial"
        animate={controlButton}
      >
        <Link href="/ourdogs" className="home--dogs--see--more">
          View All Dogs <ChevronRight size={18} />
        </Link>
      </motion.div>
    </div>
  );
}

export default memo(HomeOurDogs);
