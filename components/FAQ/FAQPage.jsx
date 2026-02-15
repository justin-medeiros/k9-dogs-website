"use client";

import { useEffect, useState } from "react";
import "./FAQ.css";
import FAQCard from "./items/FAQCard";
import data from "@/data/data.json";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FAQPage() {
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

  const faqCards = data.faq.map((faqItem, key) => {
    return (
      <motion.div
        key={key}
        variants={element}
        animate="animate"
        initial="initial"
      >
        <FAQCard data={faqItem} />
      </motion.div>
    );
  });

  return (
    <div className="faq--overall--container">
      <motion.div
        variants={content}
        animate="animate"
        initial="initial"
        className="faq--container"
      >
        <motion.h1
          variants={element}
          animate="animate"
          initial="initial"
          className="faq--title"
        >
          Frequently Asked Questions
        </motion.h1>
        {faqCards}
        <motion.p
          variants={content}
          animate="animate"
          initial="initial"
          className="faq--contact"
        >
          Can&apos;t find answers here? Feel free to{" "}
          <span>
            <Link href="/contact" className="faq--contact--us">
              Contact Us
            </Link>
          </span>
          .
        </motion.p>
      </motion.div>
    </div>
  );
}
