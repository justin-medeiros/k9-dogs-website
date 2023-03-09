import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase-config";
import "./MasterLogin.css";

export default function MasterLogin() {
  const [loginData, changeLoginData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    changeLoginData((oldLoginData) => {
      return {
        ...oldLoginData,
        [name]: value, // Will change the value of the form name
      };
    });
  }

  async function loginButtonPressed(e) {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  }

  return (
    <div className="master--login">
      <div className="master--login--container">
        <h1>Login to master account.</h1>
        <form onSubmit={loginButtonPressed}>
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={loginData.email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={loginData.password}
          />
          <button className="master--login--button">Login</button>
        </form>
        <Link to={"/reset"}>Forgot Password</Link>
      </div>
    </div>
  );
}
