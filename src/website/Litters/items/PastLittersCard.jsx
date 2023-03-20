import React from "react";
import Slider from "react-slick";
import "./PastLittersCard.css";

export default function PastLittersCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="litters--card--container">
      <div className="litters--card--slider--container">
        <Slider {...settings}>
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
