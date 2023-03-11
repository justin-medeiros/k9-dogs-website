import React from "react";
import "./HomeTestimonialCard.css";

export default function TestimonialCard(props) {
  return (
    <div className="home--testimonial--card--container">
      <img
        className="home--testimonial--card--quotation"
        src="/images/quotation.png"
      ></img>
      <p className="home--testimonial--card--quote">
        &rdquo;{props.info.text}&rdquo;
      </p>
      <h2 className="home--testimonial--card--author">{props.info.author}</h2>
    </div>
  );
}
