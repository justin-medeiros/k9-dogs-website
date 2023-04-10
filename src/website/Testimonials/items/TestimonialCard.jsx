import React from "react";
import "./TestimonialCard.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function TestimonialCard(props) {
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
      className="testimonial--card--container"
    >
      <img
        className="testimonial--card--quotation"
        src="/images/quotation.png"
      ></img>
      <p className="testimonial--card--quote">
        &rdquo;{props.info.text}&rdquo;
      </p>
      <h1 className="testimonial--card--author">{props.info.author}</h1>
    </motion.div>
  );
}
