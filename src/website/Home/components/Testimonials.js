import React from "react";
import { Link } from "react-router-dom";
import TestimonialCard from "../items/TestimonialCard";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <div className="testimonials--container">
      <h1 className="testimonials--title">What Clients Say</h1>
      <h1 className="testimonials--subtitle">
        We place huge value on building strong relationships. Hear what people
        have to say about their experience with us.{" "}
      </h1>
      <div className="testimonials--grid">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
      <Link to="/testimonials" className="testimonials--show--all">
        Show All
      </Link>
    </div>
  );
}
