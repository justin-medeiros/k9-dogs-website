import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./OurDogs.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { Pagination } from "swiper";

export default function OurDogs() {
  return (
    <div className="home--dogs--overall--container">
      <h1 className="home--dogs--title">Our Dogs</h1>
      <div className="home--dogs--swiper--container">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          spaceBetween={30}
          pagination={{ clickable: true }}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}
