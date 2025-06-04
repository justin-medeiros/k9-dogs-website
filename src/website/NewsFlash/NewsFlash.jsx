import React from "react";
import NewsSection from "../../components/NewsSection/NewsSection";
import "./NewsFlash.css";
import newsFlashData from "../../data/news-flash.json";

const NewsFlash = () => {
  return (
    <div className="news-flash-container">
      <h1>News Flash</h1>
      <div className="news-content">
        {newsFlashData.newsSections.map((section, index) => (
          <NewsSection
            key={index}
            date={section.date}
            text={section.text}
            images={section.images}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsFlash;
