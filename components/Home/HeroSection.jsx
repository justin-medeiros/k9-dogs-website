"use client";

import { useEffect, useState } from "react";
import { Facebook, Instagram } from "react-feather";
import "./HeroSection.css";
import { motion } from "framer-motion";

export default function HeroSection() {
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
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      variants={content}
      animate="animate"
      initial="initial"
      className="hero--container"
    >
      <motion.img
        variants={element}
        animate="animate"
        initial="initial"
        className="hero--image"
        src="/images/cgs_logo.png"
        alt="Clarot's German Shepherds Logo"
      />
      <motion.h1
        variants={element}
        animate="animate"
        initial="initial"
        className="hero--text"
      >
        German Shepherd Puppies for Sale in Ontario — Breeding Excellence for
        Over 30 Years
      </motion.h1>
      <motion.div
        variants={element}
        animate="animate"
        initial="initial"
        className="hero--socials"
      >
        <motion.p
          variants={element}
          animate="animate"
          initial="initial"
          className="hero--box"
        >
          Connect with me!
        </motion.p>
        <motion.div
          variants={element}
          animate="animate"
          initial="initial"
          className="icons--container"
        >
          <a
            href="https://www.instagram.com/clarotgermanshepherds/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="instagram--icon" />
          </a>
          <a
            href="https://www.facebook.com/k9dogs.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="facebook--icon" />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
