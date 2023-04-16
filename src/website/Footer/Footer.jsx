import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer--overall--container">
      <div className="footer--container">
        <Link to="/" className="footer--logo--container">
          <img className="footer--logo" src="images/logo.png"></img>
        </Link>

        <div className="footer--mobile">
          <div className="footer--quick--links">
            <h1>Quick Links</h1>
            <Link to="/">Home</Link>
            <Link to="/ourdogs">Our Dogs</Link>
            <Link to="/litters">Litters</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          <div className="footer--contact--container">
            <h1>Contact Me</h1>
            <div className="footer--email">
              <i className="fa-solid fa-envelope"></i>
              <p>clarotk9dogs@gmail.ca</p>
            </div>
            <Link to="/contact" className="footer--contact--link">
              Contact Me Now!
            </Link>
          </div>
          <div className="footer--affiliates">
            <h1>Affiliates</h1>
            <div className="footer--affiliates--images"></div>
            <a href="https://www.ckc.ca/en" target="_blank" rel="noreferrer">
              <img
                src="/images/ckc-logo.png"
                className="footer--ckc--img"
              ></img>
            </a>
            <a href="http://www.gsscc.ca/" target="_blank" rel="noreferrer">
              <img
                src="/images/gsscc-logo.png"
                className="footer--gsscc--img"
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className="footer--bottom--container">
        <div className="footer--copyright--container">
          <p className="footer--copyright--text">
            Copyright &copy;2023 All Rights Reserved &bull;
          </p>
          <a
            href="https://www.linkedin.com/in/justin-medeiros-016a38223/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="footer--name">Created by Justin Medeiros</p>
          </a>
        </div>
        <div className="footer--icons--container">
          <a
            href="https://www.instagram.com/clarotgermanshepherds/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/k9dogs.ca/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-square-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
