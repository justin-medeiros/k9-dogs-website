"use client";

import { memo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./PastLittersCard.css";

function PastLittersCard({ photos, date, parents }) {
  const swiperRef = useRef(null);


  const handleNextClick = () => {
    swiperRef.current?.swiper?.slideNext();
  };

  const handlePrevClick = () => {
    swiperRef.current?.swiper?.slidePrev();
  };

  return (
    <div
      
      
      
      className="litters--card--container"
    >
      <div className="litters--card--slider--container">
        <div className="slider--buttons--container">
          <div className="prev--button" onClick={handlePrevClick}>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="next--button" onClick={handleNextClick}>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          speed={500}
        >
          {photos.map((photoUrl, key) => (
            <SwiperSlide key={key}>
              <div className="litters--card--image--container">
                <img
                  className="litters--card--image"
                  src={photoUrl}
                  loading="lazy"
                  alt={`German Shepherd puppy from ${parents} litter - photo ${
                    key + 1
                  }`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="litters--card--dot--container"></div>
      <div className="litters--card--text--container">
        <p className="litters--date">{date}</p>
        <div className="litters--card--border"></div>
        <p className="litters--parents--title">Parents</p>
        <p className="litters--parents">{parents}</p>
      </div>
    </div>
  );
}

export default memo(PastLittersCard);
