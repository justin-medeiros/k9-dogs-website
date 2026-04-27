"use client";

import { memo, useRef } from "react";
import "./HomeOurDogs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import HomeDogCard from "./items/HomeDogCard";
import { ChevronRight } from "react-feather";

function HomeOurDogs({ homeDogData }) {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    swiperRef.current?.swiper?.slidePrev();
  };

  const handleNextClick = () => {
    swiperRef.current?.swiper?.slideNext();
  };

  return (
    <div className="home--dogs--overall--container">
      <h1 className="home--dogs--title">Our Dogs</h1>
      <div className="home--dogs--swiper--container">
        <div className="custom-nav-buttons">
          <button className="custom-prev-button" onClick={handlePrevClick}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="custom-next-button" onClick={handleNextClick}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          loop={true}
          speed={500}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            865: {
              slidesPerView: 2,
            },
            1150: {
              slidesPerView: 3,
            },
          }}
        >
          {homeDogData.map((data, id) => (
            <SwiperSlide key={id}>
              <HomeDogCard dogInfo={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        <Link href="/ourdogs" className="home--dogs--see--more">
          View All Dogs <ChevronRight size={18} />
        </Link>
      </div>
    </div>
  );
}

export default memo(HomeOurDogs);
