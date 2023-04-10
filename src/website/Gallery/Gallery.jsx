import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase-config";
import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { SpinnerCircular } from "spinners-react";
import { motion } from "framer-motion";

export default function Gallery() {
  const [allPhotos, setAllPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPhotos() {
      const folderRef = ref(storage, "gallery");
      const { items } = await listAll(folderRef);
      const photos = await Promise.all(
        items.map(async (itemRef, key) => {
          const url = await getDownloadURL(itemRef);
          return (
            <div className="gallery--picture" key={key}>
              <img src={url}></img>
            </div>
          );
        })
      );
      setAllPhotos(photos);
      setIsLoading(false);
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
    <motion.div exit={{ opacity: 0 }}>
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
          <div className="gallery--photos--container">{allPhotos}</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
