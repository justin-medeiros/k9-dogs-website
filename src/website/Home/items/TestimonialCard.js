import React from "react";
import "./TestimonialCard.css";

export default function TestimonialCard(props) {
  return (
    <div className="testimonial--card--container">
      <p className="testimonial--card--quote">
        &rdquo;{props.info.text}&rdquo;
      </p>
      <h2 className="testimonial--card--author">{props.info.author}</h2>
    </div>
  );
}
