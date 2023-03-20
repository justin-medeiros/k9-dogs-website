import React, { useRef } from "react";
import Slider from "react-slick";
import "./PastLittersCard.css";

export default function PastLittersCard() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext(); // Call slickNext() method to go to the next slide
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev(); // Call slickNext() method to go to the next slide
  };

  return (
    <div className="litters--card--container">
      <div className="litters--card--slider--container">
        <div className="slider--buttons--container">
          <div className="prev--button" onClick={handlePrevClick}>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="next--button" onClick={handleNextClick}>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>

        <Slider {...settings} ref={sliderRef}>
          <div className="litters--card--image--container">
            <img
              className="litters--card--image"
              src="images/gallery/dog1.jpeg"
            ></img>
          </div>
          <div className="litters--card--image--container">
            <img
              className="litters--card--image"
              src="images/gallery/dog1.jpeg"
            ></img>
          </div>
          <div className="litters--card--image--container">
            <img
              className="litters--card--image"
              src="images/gallery/dog1.jpeg"
            ></img>
          </div>
        </Slider>
      </div>
      <div className="litters--card--dot--container"></div>
      <div className="litters--card--text--container">
        <p className="litters--date">August, 2020</p>
        <div className="litters--underline"></div>
        <p className="litters--quantity">4 Females and 1 Male</p>
      </div>
    </div>
  );
}
