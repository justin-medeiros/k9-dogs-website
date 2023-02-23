import React from "react";
import "./Gallery.css";

export default function Gallery() {
  const data = [
    {
      id: 0,
      imgSrc: "/images/image-gs.jpeg",
    },
    {
      id: 1,
      imgSrc: "/images/image-gs.jpeg",
    },
    {
      id: 2,
      imgSrc: "/images/image-gs.jpeg",
    },
    {
      id: 3,
      imgSrc: "/images/test.jpeg",
    },
    {
      id: 4,
      imgSrc: "/images/test.png",
    },
    {
      id: 5,
      imgSrc: "/images/image-gs.jpeg",
    },
    {
      id: 6,
      imgSrc: "/images/image-gs.jpeg",
    },
    {
      id: 7,
      imgSrc: "/images/test.jpeg",
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
