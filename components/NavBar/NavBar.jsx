"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./NavBar.css";
import Image from "next/image";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

  const onMenuIconClick = () => {
    setClick((prev) => !prev);
  };

  const closeMobileMenu = useCallback(() => {
    setClick(false);
  }, []);

  const handleClickOutside = useCallback(
    (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".menu--icon")
      ) {
        closeMobileMenu();
      }
    },
    [closeMobileMenu]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

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
            alt="Clarot German Shepherds Logo"
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
                className={`navbar--links${
                  pathname === link.href ? " active" : ""
                }`}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="menu--icon" onClick={onMenuIconClick}>
          <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </div>
      </div>
    </nav>
  );
}
