"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./NavBar.css";

export default function NavBar() {
  const [navButton, setNavButton] = useState(false);
  const [click, setClick] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

  const onMenuIconClick = () => {
    setClick((prevClick) => !prevClick);
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
    showNavButton();
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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/ourdogs", label: "Our Dogs" },
    { href: "/litters", label: "Litters" },
    { href: "/gallery", label: "Gallery" },
    { href: "/news", label: "News Flash" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar--container">
        <Link href="/">
          <img
            className="navbar--logo"
            src="/images/cgs_long_logo.png"
            alt="Clarot's German Shepherds Logo"
          />
        </Link>
        <ul
          ref={menuRef}
          className={click ? "navbar--items mobile" : "navbar--items"}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${
                  click && navButton ? "navbar--mobile--links" : "navbar--links"
                }${pathname === link.href ? " active" : ""}`}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="menu--icon" onClick={onMenuIconClick}>
          <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}
