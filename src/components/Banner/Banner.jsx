import React from "react";
import { X } from "react-feather";
import { Link } from "react-router-dom";
import "./Banner.css";

export default function Banner({ bannerData, setBannerData }) {
  const { description, linkPath, linkText } = bannerData;

  const onDismiss = () => {
    setBannerData((prev) => ({
      ...prev,
      showBanner: false,
    }));
  };

  return (
    <div className="banner-container">
      <div className="banner-description">
        {description}
        {linkText && linkPath && (
          <Link to={linkPath} className="banner-link">
            {linkText}
          </Link>
        )}
      </div>

      <X onClick={onDismiss} className="banner-close" color={"white"} />
    </div>
  );
}
