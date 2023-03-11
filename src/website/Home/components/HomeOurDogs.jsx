import React, { useEffect, useState } from "react";
import "./HomeOurDogs.css";
import DogCard from "../items/HomeDogCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { db } from "../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

export default function HomeOurDogs() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [ourDogs, setOurDogs] = useState([]);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  useEffect(() => {
    if (windowWidth < 825) {
      setSlidesToShow(1);
    } else if (windowWidth < 960) {
      setSlidesToShow(2);
    } else if (windowWidth < 1150) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  }, [windowWidth]);

  useEffect(() => {
    async function getDogs() {
      const querySnapshot = await getDocs(collection(db, "dogs"));
      const allDogs = querySnapshot.docs.map((doc) => {
        const dogData = doc.data();
        return (
          <div key={doc.id}>
            <DogCard dog={dogData} />
          </div>
        );
      });
      setOurDogs(allDogs);
    }
    getDogs();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <button className="next--button">Next</button>,
    prevArrow: <button className="prev--button">Previous</button>,
  };

  return (
    <div className="home--dogs--overall--container">
      <h1 className="home--dogs--title">Our Dogs</h1>
      <div className="home--dogs--swiper--container">
        <Slider {...settings}>{ourDogs}</Slider>
      </div>
      <Link to="/ourdogs" className="home--dogs--see--more">
        Click to see more!
      </Link>
    </div>
  );
}
