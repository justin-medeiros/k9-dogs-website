"use client";

import { useEffect, useState } from "react";
import { Facebook, Instagram } from "react-feather";
import "./HeroSection.css";

export default function HeroSection() {


  return (
    <div
      
      
      
      className="hero--container"
    >
      <img
        
        
        
        className="hero--image"
        src="/images/cgs_logo.png"
        alt="Clarot German Shepherds Logo"
      />
      <h1
        
        
        
        className="hero--text"
      >
        German Shepherd Puppies for Sale in Ontario — Breeding Excellence for
        Over 30 Years
      </h1>
      <div
        
        
        
        className="hero--socials"
      >
        <p
          
          
          
          className="hero--box"
        >
          Connect with me!
        </p>
        <div
          
          
          
          className="icons--container"
        >
          <a
            href="https://www.instagram.com/clarotgermanshepherds/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="instagram--icon" />
          </a>
          <a
            href="https://www.facebook.com/k9dogs.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="facebook--icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
