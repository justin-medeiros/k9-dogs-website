import React, { useState } from "react";
import TestimonialCard from "./items/TestimonialCard";
import data from "../../data.json";
import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import "./Testimonials.css";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Testimonials() {
  const formDataEmptyObject = {
    name: "",
    message: "",
  };
  const [validationMessage, setValidationMessage] = useState(null);
  const [formData, setFormData] = useState(formDataEmptyObject);
  const control = useAnimation();
  const [ref, inView] = useInView();

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

  const content = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const element = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("animate");
    }
  }, [control, inView]);

  return (
    <motion.div exit={{ opacity: 0 }}>
      <motion.div
        variants={content}
        animate="animate"
        initial="initial"
        className="testimonials--overall--container"
      >
        <motion.h1
          variants={element}
          animate="animate"
          initial="initial"
          className="testimonials--title"
        >
          Testimonials
        </motion.h1>
        <motion.h2
          variants={element}
          animate="animate"
          initial="initial"
          className="testimonials--subtitle"
        >
          See why clients trust us for their German Shepherd needs!
        </motion.h2>
        <motion.div
          variants={element}
          animate="animate"
          initial="initial"
          className="testimonials--container"
        >
          <motion.div
            variants={element}
            initial="initial"
            animate="animate"
            className="testimonials--cards"
          >
            {allTestimonials}
          </motion.div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={element}
          initial="initial"
          animate={control}
          className="testimonials--share--container"
        >
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
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
