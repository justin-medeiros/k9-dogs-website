import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase-config";
import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { SpinnerCircular } from "spinners-react";

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

  return (
    <div className="gallery--container">
      <div className="gallery--title--background">
        <h1 className="gallery--title">Photo Gallery</h1>
      </div>
      <div
        className={
          isLoading ? "gallery--spinner" : "gallery--photos--background"
        }
      >
        {isLoading && <SpinnerCircular color="red" size={200} />}
        <div className="gallery--photos--container">{allPhotos}</div>
      </div>
    </div>
  );
}
