import React, { useEffect, useState } from "react";
import { X } from "react-feather";
import "./Banner.css";
export default function Banner({ description, setBannerData }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const onDismiss = () => {
    setBannerData((prev) => ({
      ...prev,
      showBanner: false,
    }));
  };
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <div className="banner-container">
      <body className="banner-description">{description}</body>

      <X
        onClick={onDismiss}
        className="banner-close"
        color={"white"}
        size={windowWidth > 960 ? 32 : 22}
      />
    </div>
  );
}
