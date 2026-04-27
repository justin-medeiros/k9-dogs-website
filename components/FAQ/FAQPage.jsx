"use client";

import { useEffect, useState } from "react";
import "./FAQ.css";
import FAQCard from "./items/FAQCard";
import data from "@/data/data.json";
import Link from "next/link";

export default function FAQPage() {


  const faqCards = data.faq.map((faqItem, key) => {
    return (
      <div
        key={key}
        
        
        
      >
        <FAQCard data={faqItem} />
      </div>
    );
  });

  return (
    <div className="faq--overall--container">
      <div
        
        
        
        className="faq--container"
      >
        <h1
          
          
          
          className="faq--title"
        >
          Frequently Asked Questions
        </h1>
        {faqCards}
        <p
          
          
          
          className="faq--contact"
        >
          Can&apos;t find answers here? Feel free to{" "}
          <span>
            <Link href="/contact" className="faq--contact--us">
              Contact Us
            </Link>
          </span>
          .
        </p>
      </div>
    </div>
  );
}
