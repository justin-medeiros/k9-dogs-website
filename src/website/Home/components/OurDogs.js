import React from "react";
import "./OurDogs.css";
import DogCard from "../items/DogCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function OurDogs() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <button className="next--button">Next</button>,
    prevArrow: <button className="prev--button">Previous</button>,
  };
  return (
    <div className="home--dogs--overall--container">
      <h1 className="home--dogs--title">Our Dogs</h1>
      <div className="home--dogs--swiper--container">
        <Slider {...settings}>
          <div>
            <DogCard />
          </div>
          <div>
            <DogCard />
          </div>
          <div>
            <DogCard />
          </div>
          <div>
            <DogCard />
          </div>
          <div>
            <DogCard />
          </div>
          <div>
            <DogCard />
          </div>
        </Slider>
      </div>
    </div>
  );
}
