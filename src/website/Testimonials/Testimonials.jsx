import React, { useState } from "react";
import TestimonialCard from "./items/TestimonialCard";
import data from "../../data.json";
import emailjs from "@emailjs/browser";

import "./Testimonials.css";

export default function Testimonials() {
  const formDataEmptyObject = {
    name: "",
    message: "",
  };
  const [validationMessage, setValidationMessage] = useState(null);
  const [formData, setFormData] = useState(formDataEmptyObject);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((data) => data == "")) {
      setValidationMessage(false);
    } else {
      setValidationMessage(true);
      setFormData(formDataEmptyObject);
      emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_TESTIMONIAL_ID,
        e.target,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY_CONTACT
      );
    }
  };

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

      <div className="testimonials--share--container">
        <div className="testimonials--share--text--container">
          <h1>
            Share your <span>story</span>!
          </h1>
          <p>Your experience matters to us!</p>
        </div>
        <div className="testimonials--share--form">
          <form onSubmit={submitForm}>
            <h1 className="testimonials--share--title">Name</h1>
            <input
              className="testimonials--share--box"
              type="text"
              placeholder="Name"
              value={formData.name}
              name="name"
              onChange={handleChange}
            ></input>
            <h1 className="testimonials--share--title">Message</h1>
            <textarea
              className="testimonials--share--textarea"
              placeholder="Message"
              value={formData.message}
              name="message"
              onChange={handleChange}
            ></textarea>
            <button className="testimonials--share--button">Submit</button>
            <div className="testimonials--share--validation--container">
              <i
                className={`${
                  validationMessage === true
                    ? "fa-solid fa-check"
                    : validationMessage === false
                    ? "fa-solid fa-xmark"
                    : ""
                }`}
              ></i>
              <h2
                className={`testimonials--share--valid--text ${
                  validationMessage === true
                    ? "success"
                    : validationMessage === false
                    ? "error"
                    : ""
                }`}
              >
                {validationMessage === true
                  ? "Email sent successfully."
                  : validationMessage === false
                  ? "Fields are invalid or empty. Please try again."
                  : null}
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
