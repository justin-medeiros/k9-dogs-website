import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  const [forgetPasswordEmail, setForgetPasswordEmail] = useState("");

  const navigate = useNavigate();

  async function submitClicked() {
    if (forgetPasswordEmail === "") {
      alert("email empty");
    } else {
      await sendPasswordResetEmail(auth, forgetPasswordEmail)
        .then(() => {
          alert("email sent");
          navigate("/master");
        })
        .catch((error) => {
          alert("invalid email");
          console.log(error.code, error.message);
        });
    }
  }

  return (
    <div className="forgot--password">
      <div className="forgot--password--container">
        <h1>Forgot password.</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setForgetPasswordEmail(e.target.value);
          }}
          name="email"
          value={forgetPasswordEmail}
        />
        <button className="forgot--password--button" onClick={submitClicked}>
          Submit
        </button>
      </div>
    </div>
  );
}
