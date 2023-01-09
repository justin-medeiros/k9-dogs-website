import React, { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../../firebase-config";
import "./AddDogs.css";

export default function AddDogs() {
  const [newDogData, setNewDogData] = useState({
    name: "",
    gender: "",
    photoUrl: "",
    description: "",
  });

  const [newImage, setImage] = useState(null);

  useEffect(() => {
    const saveDataToDatabase = async () => {
      if (newDogData.photoUrl != "") {
        await setDoc(doc(db, "dogs", newDogData.name), newDogData);
        console.log(newDogData);
        alert("data sent");
      }
    };
    saveDataToDatabase();
  }, [newDogData.photoUrl]);

  function handleChange(event) {
    const { name, value } = event.target;
    setNewDogData((dogData) => {
      return {
        ...dogData,
        [name]: value, // Will change the value of the form name
      };
    });
  }

  function handleImageChange(e) {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  function submitForm(event) {
    event.preventDefault();
    const imageRef = ref(storage, `dogs/${newDogData.name}`);
    uploadBytes(imageRef, newImage)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            console.log(url);
            setNewDogData(() => {
              return {
                ...newDogData,
                photoUrl: url,
              };
            });
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
    <div className="add--dogs">
      <div className="add--dogs--container">
        <h1 className="add--dogs--title">Add a new dog to the kennel.</h1>
        <form className="add--dogs--form" onSubmit={submitForm}>
          <input
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="name"
            value={newDogData.name}
          />
          <h3>Select a gender.</h3>
          <select
            name="gender"
            onChange={handleChange}
            value={newDogData.gender}
          >
            <option value="select">--Select--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <h3>Upload a photo of your dog.</h3>
          <input type="file" name="image" onChange={handleImageChange} />
          <textarea
            type="textbox"
            value={newDogData.description}
            placeholder="Description"
            onChange={handleChange}
            name="description"
          ></textarea>
          <button className="submit--btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
