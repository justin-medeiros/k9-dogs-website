import React from "react";
import "./FAQ.css";
import FAQCard from "./items/FAQCard";

export default function FAQ() {
  return (
    <div className="faq--container">
      <h1 className="faq--title">Frequently Asked Questions</h1>
      <FAQCard />
    </div>
  );
}
