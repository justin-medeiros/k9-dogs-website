import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [currentTab, setCurrentTab] = useState("");
  const [navButton, setNavButton] = useState(false);
  const [menuIconClick, setMenuIconClick] = useState(false);

  useEffect(() => {
    setCurrentTab(window.location.pathname);
    console.log(currentTab);
    console.log(navButton);
  }, [window.location.pathname]);

  const onMenuIconClick = () => {
    setMenuIconClick((prevClick) => {
      return !prevClick;
    });
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
          <img className="navbar--logo" src="/images/logo-w-r-v2.png"></img>
        </NavLink>
        <ul
          className={menuIconClick ? "navbar--items active" : "navbar--items"}
        >
          <li>
            <NavLink
              to="/"
              className={
                menuIconClick ? "navbar--mobile--links" : "navbar--links"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ourdogs"
              className={
                menuIconClick ? "navbar--mobile--links" : "navbar--links"
              }
            >
              Our Dogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/puppies"
              className={
                menuIconClick ? "navbar--mobile--links" : "navbar--links"
              }
            >
              Puppies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={
                menuIconClick ? "navbar--mobile--links" : "navbar--links"
              }
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/testimonials"
              className={
                menuIconClick ? "navbar--mobile--links" : "navbar--links"
              }
            >
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={
                menuIconClick ? "navbar--mobile--links" : "navbar--links"
              }
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={
                menuIconClick ? "navbar--mobile--links" : "navbar--links"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="menu--icon" onClick={onMenuIconClick}>
          <i
            className={menuIconClick ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          ></i>
        </div>
      </div>
    </nav>
  );
}
