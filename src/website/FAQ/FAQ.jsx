import React, { useEffect, useState } from "react";
import "./FAQ.css";
import FAQCard from "./items/FAQCard";
import data from "../../data.json";
import { Link } from "react-router-dom";

export default function FAQ() {
  const [allFAQ, setAllFAQ] = useState([]);

  useEffect(() => {
    const faqCards = data.faq.map((data) => {
      return <FAQCard key={data.key} data={data} />;
    });
    setAllFAQ(faqCards);
  }, []);

  return (
    <div className="faq--container">
      <h1 className="faq--title">Frequently Asked Questions</h1>
      {allFAQ}
      <p className="faq--contact">
        Can't find answers here? Feel free to{" "}
        <span>
          <Link to="/contact" className="faq--contact--us">
            Contact Us
          </Link>
        </span>
        .
      </p>
    </div>
  );
}
