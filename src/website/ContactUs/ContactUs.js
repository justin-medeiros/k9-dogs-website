import React, { useState } from "react";
import "./ContactUs.css";

export default function ContactUs() {
  const [validationMessage, setValidationMessage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
      alert("Fields empty");
      setValidationMessage(false);
    } else {
      setValidationMessage(true);
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
              type="text"
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
                  ? "Email sent successfully"
                  : validationMessage === false
                  ? "Some or all fields are empty. Please try again"
                  : null}
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
