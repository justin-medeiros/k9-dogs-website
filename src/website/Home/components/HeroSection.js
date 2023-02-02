import React from "react";
import { Facebook, Instagram, Twitter } from "react-feather";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div>
      <div className="hero--container">
        <img className="hero--image" src="/images/logo.png"></img>
        <p className="hero--text">chjbdsjhgvdbjfvdbjfvshdgvhs</p>
        <div className="hero--socials">
          <p>Connect with me!</p>
          <div
            className="icons--container"
            target="_blank"
            rel="noopener noreferrer"
          >
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="twitter--icon" size={42} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="facebook--icon" size={42} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="instagram--icon" size={42} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
