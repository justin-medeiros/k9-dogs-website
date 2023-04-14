import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TestimonialCard from "../items/HomeTestimonialCard";
import "./HomeTestimonials.css";
import data from "../../../data.json";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HomeTestimonials() {
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

  const controlTest = useAnimation();
  const [refTest, inViewTest] = useInView({
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
    if (inViewTest) {
      controlTest.start("animate");
    }

    if (inViewButton) {
      controlButton.start("animate");
    }
  }, [
    controlTitle,
    controlContainer,
    controlTest,
    controlButton,
    inViewTitle,
    inViewContainer,
    inViewTest,
    inViewButton,
  ]);

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

  const allTestimonials = data.testimonials.slice(0, 3).map((testCard) => {
    return <TestimonialCard key={testCard.id} info={testCard} />;
  });
  return (
    <motion.div
      ref={refContainer}
      variants={element}
      initial="initial"
      animate={controlContainer}
      className="home--testimonials--container"
    >
      <motion.h1
        ref={refTitle}
        variants={element}
        initial="initial"
        animate={controlTitle}
        className="home--testimonials--title"
      >
        What Clients Say
      </motion.h1>
      <motion.h1
        ref={refTitle}
        variants={element}
        initial="initial"
        animate={controlTitle}
        className="home--testimonials--subtitle"
      >
        We place huge value on building strong relationships. Hear what people
        have to say about their experience with us.{" "}
      </motion.h1>
      <motion.div
        ref={refTest}
        variants={element}
        initial="initial"
        animate={controlTest}
        className="home--testimonials--grid"
      >
        {allTestimonials}
      </motion.div>
      <Link to="/testimonials" className="home--testimonials--show--all">
        <motion.div
          ref={refButton}
          variants={element}
          initial="initial"
          animate={controlButton}
        >
          Show All
        </motion.div>
      </Link>
    </motion.div>
  );
}
