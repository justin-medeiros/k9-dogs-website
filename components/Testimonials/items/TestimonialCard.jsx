"use client";

import "./TestimonialCard.css";
import Image from "next/image";

export default function TestimonialCard(props) {

  return (
    <div
      
      
      
      className="testimonial--card--container"
    >
      <img
        className="testimonial--card--quotation"
        src="/images/quotation.png"
        alt="Testimonial quote from a German Shepherd puppy owner"
      />
      <p className="testimonial--card--quote">
        &rdquo;{props.info.text}&rdquo;
      </p>
      <h1 className="testimonial--card--author">{props.info.author}</h1>
    </div>
  );
}
