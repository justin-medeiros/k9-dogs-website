import React from "react";
import "./TestimonialCard.css";

export default function TestimonialCard() {
  return (
    <div className="testimonial--card--container">
      <p className="testimonial--card--quote">
        &ldquo;Thank you for the excellent German shepherd After having Cassie
        for half a year, we really want to thank Lino for providing us this
        excellent dog and his always kind support. First of all, Cassie has
        brought us so much Joy after she joined our family. She has very good
        temperament... Lino is such a responsible person. We don’t have
        experience with dogs at all. Whenever we have any questions, we either
        message or email Lino, he always respond promptly and give us a lot of
        valuable suggestions. Lino is so helpful and supportive. I would
        recommend Clarot’s German Shepherds to my friends.&rdquo;
      </p>
      <h2 className="testimonial--card--author">John Smith</h2>
    </div>
  );
}
