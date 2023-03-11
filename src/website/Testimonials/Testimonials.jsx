import React from "react";
import TestimonialCard from "./items/TestimonialCard";
import data from "../../data.json";

import "./Testimonials.css";

export default function Testimonials() {
  const allTestimonials = data.testimonials.map((testCard) => {
    return <TestimonialCard key={testCard.id} info={testCard} />;
  });
  return (
    <div className="testimonials--overall--container">
      <h1 className="testimonials--title">Testimonials</h1>
      <h2 className="testimonials--subtitle">
        See why clients trust us for their German Shepherd needs!
      </h2>
      <div className="testimonials--container">
        <div className="testimonials--cards">{allTestimonials}</div>
      </div>
    </div>
  );
}
