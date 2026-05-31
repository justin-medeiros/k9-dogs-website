"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./NavBar.css";

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

  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/ourdogs", label: "Our Dogs" },
    { href: "/litters", label: "Litters" },
    { href: "/gallery", label: "Gallery" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact Us" },
  ];

  const moreLinks = [
    { href: "/news", label: "News Flash" },
    { href: "/puppy-purchase-agreement", label: "Puppy Purchase Agreement" },
  ];

  const moreActive = moreLinks.some((link) => pathname === link.href);

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
          {mainLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`navbar--links${pathname === link.href ? " active" : ""}`}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Desktop: More dropdown (hidden on mobile) */}
          <li className="more--item">
            <span className={`navbar--links more--trigger${moreActive ? " active" : ""}`}>
              More <i className="fa-solid fa-chevron-down more--chevron" />
            </span>
            <ul className="more--dropdown">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`more--dropdown--link${pathname === link.href ? " active" : ""}`}
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Mobile only: more links shown flat (hidden on desktop) */}
          {moreLinks.map((link) => (
            <li key={`m-${link.href}`} className="more--mobile--item">
              <Link
                href={link.href}
                className={`navbar--links${pathname === link.href ? " active" : ""}`}
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
