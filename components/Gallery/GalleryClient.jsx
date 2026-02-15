"use client";

import { useEffect, useState } from "react";
import "./Gallery.css";
import { SpinnerCircular } from "spinners-react";
import { motion } from "framer-motion";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY;
const FOLDER_ID = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID;

export default function GalleryClient() {
  const [allPhotos, setAllPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPhotos() {
      try {
        const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&fields=files(id,name,mimeType,createdTime)&orderBy=createdTime+desc&key=${API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        const imageFiles = (data.files || []).filter((f) =>
          f.mimeType.startsWith("image/")
        );
        setAllPhotos(imageFiles);
        setIsLoading(false);
      } catch (e) {
        console.error("Error fetching gallery:", e);
        setIsLoading(false);
      }
    }
    getPhotos();
  }, []);

  const content = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const element = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      variants={content}
      animate="animate"
      initial="initial"
      className="gallery--container"
    >
      <motion.div
        variants={element}
        animate="animate"
        initial="initial"
        className="gallery--title--background"
      >
        <h1 className="gallery--title">Photo Gallery</h1>
      </motion.div>
      <motion.div
        variants={element}
        animate="animate"
        initial="initial"
        className={
          isLoading ? "gallery--spinner" : "gallery--photos--background"
        }
      >
        {isLoading && <SpinnerCircular color="red" size={200} />}
        <div className="gallery--photos--container">
          {allPhotos.map((file) => (
            <div className="gallery--picture" key={file.id}>
              <img
                src={`https://lh3.googleusercontent.com/d/${file.id}=w1000`}
                alt={file.name}
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
