import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [navButton, setNavButton] = useState(false);
  const [click, setClick] = useState(false);
  const menuRef = useRef(null);

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

  useEffect(() => {
    window.addEventListener("resize", showNavButton);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("resize", showNavButton);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !event.target.closest(".menu--icon")
    ) {
      closeMobileMenu();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar--container">
        <NavLink to="/">
          <img className="navbar--logo" src="images/cgs_long_logo.png"></img>
        </NavLink>
        <ul
          ref={menuRef}
          className={click ? "navbar--items mobile" : "navbar--items"}
        >
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
