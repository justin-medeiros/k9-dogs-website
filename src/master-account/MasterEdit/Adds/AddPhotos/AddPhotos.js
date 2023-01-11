import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../../firebase-config";
import "./AddPhotos.css";

export default function AddDogs() {
  const [newImage, setImage] = useState(null);

  function handleImageChange(e) {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  function submitForm(event) {
    event.preventDefault();
    const imageRef = ref(storage, `photo-gallery/${newImage.name}`);
    uploadBytes(imageRef, newImage)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            console.log(url);
            alert("added photo to storage");
          })
          .catch((error) => {
            alert("Error!");
            console.log(error.code, error.message);
          });
      })
      .catch((error) => {
        alert("Error!");
        console.log(error.code, error.message);
      });
  }

  return (
    <div className="add--photos">
      <div className="add--photos--container">
        <h1 className="add--photos--title">Add a new dog to the kennel.</h1>
        <form className="add--photos--form" onSubmit={submitForm}>
          <h3>Upload a photo of your dog.</h3>
          <input type="file" name="image" onChange={handleImageChange} />
          <button className="submit--btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
