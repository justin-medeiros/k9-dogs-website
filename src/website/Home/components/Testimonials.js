import React from "react";
import { Link } from "react-router-dom";
import TestimonialCard from "../items/TestimonialCard";
import "./Testimonials.css";
import data from "../../../data.json";

export default function Testimonials() {
  const allTestimonials = data.testimonials.map((testCard) => {
    return <TestimonialCard key={testCard.id} info={testCard} />;
  });
  return (
    <div className="testimonials--container">
      <h1 className="testimonials--title">What Clients Say</h1>
      <h1 className="testimonials--subtitle">
        We place huge value on building strong relationships. Hear what people
        have to say about their experience with us.{" "}
      </h1>
      <div className="testimonials--grid">{allTestimonials}</div>
      <Link to="/testimonials" className="testimonials--show--all">
        Show All
      </Link>
    </div>
  );
}
