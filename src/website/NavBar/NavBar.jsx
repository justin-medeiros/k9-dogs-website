import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [navButton, setNavButton] = useState(false);
  const [click, setClick] = useState(false);

  const onMenuIconClick = () => {
    setClick((prevClick) => {
      return !prevClick;
    });
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const showNavButton = () => {
    if (window.innerWidth <= 960) {
      setNavButton(true);
    } else {
      setNavButton(false);
    }
  };

  window.addEventListener("resize", showNavButton);

  return (
    <nav className="navbar">
      <div className="navbar--container">
        <NavLink to="/">
          <img className="navbar--logo" src="images/logo.png"></img>
        </NavLink>
        <ul className={click ? "navbar--items mobile" : "navbar--items"}>
          <li>
            <NavLink
              to="/"
              className={
                click && navButton ? "navbar--mobile--links" : "navbar--links"
              }
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ourdogs"
              className={
                click && navButton ? "navbar--mobile--links" : "navbar--links"
              }
              onClick={closeMobileMenu}
            >
              Our Dogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/litters"
              className={
                click && navButton ? "navbar--mobile--links" : "navbar--links"
              }
              onClick={closeMobileMenu}
            >
              Litters
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={
                click && navButton ? "navbar--mobile--links" : "navbar--links"
              }
              onClick={closeMobileMenu}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/testimonials"
              className={
                click && navButton ? "navbar--mobile--links" : "navbar--links"
              }
              onClick={closeMobileMenu}
            >
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={
                click && navButton ? "navbar--mobile--links" : "navbar--links"
              }
              onClick={closeMobileMenu}
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={
                click && navButton ? "navbar--mobile--links" : "navbar--links"
              }
              onClick={closeMobileMenu}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="menu--icon" onClick={onMenuIconClick}>
          <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}
