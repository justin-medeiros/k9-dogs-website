import React from "react";
import "./Gallery.css";

export default function Gallery() {
  const data = [
    {
      id: 0,
      imgSrc: "/images/gallery/dog1.jpeg",
    },
    {
      id: 1,
      imgSrc: "/images/gallery/dog2.jpeg",
    },
    {
      id: 2,
      imgSrc: "/images/gallery/dog3.jpeg",
    },
    {
      id: 3,
      imgSrc: "/images/gallery/dog4.jpeg",
    },
    {
      id: 4,
      imgSrc: "/images/gallery/dog5.jpeg",
    },
    {
      id: 5,
      imgSrc: "/images/gallery/dog6.jpeg",
    },
    {
      id: 6,
      imgSrc: "/images/gallery/dog7.jpg",
    },
  ];

  const allPhotos = data.map((image) => {
    return (
      <div className="gallery--picture" key={image.id}>
        <img src={image.imgSrc}></img>
      </div>
    );
  });

  return (
    <div className="gallery--container">
      <div className="gallery--title--background">
        <h1 className="gallery--title">Photo Gallery</h1>
      </div>
      <div className="gallery--photos--background">
        <div className="gallery--photos--container">{allPhotos}</div>
      </div>
    </div>
  );
}
