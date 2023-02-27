import React, { useState } from "react";
import "./ContactUs.css";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const formDataEmptyObject = {
    name: "",
    email: "",
    subject: "",
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
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      );
    }
  };

  return (
    <div className="contactus--overall--container">
      <div className="contactus--container">
        <div className="contactus--text--container">
          <h1>Contact Us</h1>
          <p>Send us a message!</p>
        </div>
        <div className="contactus--form">
          <form onSubmit={submitForm}>
            <h1 className="contactus--form--title">Name</h1>
            <input
              className="contactus--input--box"
              type="text"
              placeholder="Name"
              value={formData.name}
              name="name"
              onChange={handleChange}
            ></input>
            <h1 className="contactus--form--title">Email</h1>
            <input
              className="contactus--input--box"
              type="email"
              placeholder="Email"
              value={formData.email}
              name="email"
              onChange={handleChange}
            ></input>
            <h1 className="contactus--form--title">Subject</h1>
            <input
              className="contactus--input--box"
              type="text"
              placeholder="Subject"
              value={formData.subject}
              name="subject"
              onChange={handleChange}
            ></input>
            <h1 className="contactus--form--title">Message</h1>
            <textarea
              className="contactus--input--textarea"
              placeholder="Message"
              value={formData.message}
              name="message"
              onChange={handleChange}
            ></textarea>
            <button className="contactus--button">Submit</button>
            <div className="contactus--validation--container">
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
                className={`contactus--validation ${
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
