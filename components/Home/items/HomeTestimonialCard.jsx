"use client";

import "./HomeTestimonialCard.css";
import Image from "next/image";

export default function TestimonialCard(props) {

  return (
    <div
      
      
      
      className="home--testimonial--card--container"
    >
      <img
        className="home--testimonial--card--quotation"
        src="/images/quotation.png"
        alt="Testimonial quote from a German Shepherd puppy owner"
      />
      <p className="home--testimonial--card--quote">
        &rdquo;{props.info.text}&rdquo;
      </p>
      <h2 className="home--testimonial--card--author">{props.info.author}</h2>
    </div>
  );
}
