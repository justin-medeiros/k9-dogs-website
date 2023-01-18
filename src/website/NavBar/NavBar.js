import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [currentTab, setCurrentTab] = useState("");

  useEffect(() => {
    setCurrentTab(window.location.pathname);
    console.log(currentTab);
  }, [window.location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar--container">
        <NavLink to="/">
          <img className="navbar--logo" src="/images/logo-w-r-v2.png"></img>
        </NavLink>
        <ul>
          <li>
            <NavLink to="/" className="navbar--links">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/ourdogs" className="navbar--links">
              Our Dogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/puppies" className="navbar--links">
              Puppies
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className="navbar--links">
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/testimonials" className="navbar--links">
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" className="navbar--links">
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              id={currentTab === "/contact" ? "active" : ""}
              className="navbar--links"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
