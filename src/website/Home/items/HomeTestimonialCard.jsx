import React, { useEffect } from "react";
import "./HomeTestimonialCard.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function TestimonialCard(props) {
  const control = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      control.start("animate");
    }
  }, [control, inView]);

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
    <motion.div
      ref={ref}
      variants={element}
      initial="initial"
      animate={control}
      className="home--testimonial--card--container"
    >
      <img
        className="home--testimonial--card--quotation"
        src="/images/quotation.png"
      ></img>
      <p className="home--testimonial--card--quote">
        &rdquo;{props.info.text}&rdquo;
      </p>
      <h2 className="home--testimonial--card--author">{props.info.author}</h2>
    </motion.div>
  );
}
