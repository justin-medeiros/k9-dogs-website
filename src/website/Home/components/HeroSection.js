import React, { useEffect, useState } from "react";
import { Facebook, Instagram, Twitter } from "react-feather";
import "./HeroSection.css";

export default function HeroSection() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <div>
      <div className="hero--container">
        <img className="hero--image" src="/images/logo.png"></img>
        <p className="hero--text">Breeding German Shepherds That Matter!</p>
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
              <Twitter
                className="twitter--icon"
                size={windowWidth > 960 ? 42 : 36}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook
                className="facebook--icon"
                size={windowWidth > 960 ? 42 : 36}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                className="instagram--icon"
                size={windowWidth > 960 ? 42 : 36}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
