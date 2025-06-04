import React from "react";
import "./NewsSection.css";

const NewsSection = ({ date, text, images }) => {
  return (
    <div className="news-section">
      <div className="news-date">{date}</div>
      <div className="news-text">{text}</div>
      <div className="news-images">
        {images.map((image, index) => (
          <div key={index} className="news-image-container">
            <img
              src={image.url}
              alt={`News image ${index + 1}`}
              className="news-image"
            />
            <p className="image-description">{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
