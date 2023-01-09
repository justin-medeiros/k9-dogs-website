import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { db, storage } from "../../../firebase-config";
import "./AddPuppies.css";

export default function AddPuppies() {
  const [newPuppyData, setPuppyData] = useState({
    name: "",
    gender: "",
    photoUrl: "",
    description: "",
  });

  const [newImage, setImage] = useState(null);

  useEffect(() => {
    const saveDataToDatabase = async () => {
      if (newPuppyData.photoUrl != "") {
        await setDoc(doc(db, "puppies", newPuppyData.name), newPuppyData);
        console.log(newPuppyData);
        alert("data sent");
      }
    };
    saveDataToDatabase();
  }, [newPuppyData.photoUrl]);

  function handleChange(event) {
    const { name, value } = event.target;
    setPuppyData((dogData) => {
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
    const imageRef = ref(storage, `puppies/${newPuppyData.name}`);
    uploadBytes(imageRef, newImage)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            console.log(url);
            setPuppyData(() => {
              return {
                ...newPuppyData,
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
    <div className="add--puppies">
      <div className="add--puppies--container">
        <h1 className="add--puppies--title">Add a new puppy to the litter.</h1>
        <form className="add--puppies--form" onSubmit={submitForm}>
          <input
            type="text"
            placeholder="Name"
            onChange={handleChange}
            name="name"
            value={newPuppyData.name}
          />
          <h3>Select a gender.</h3>
          <select
            name="gender"
            onChange={handleChange}
            value={newPuppyData.gender}
          >
            <option value="select">--Select--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <h3>Upload a photo of your puppy.</h3>
          <input type="file" name="image" onChange={handleImageChange} />
          <textarea
            type="textbox"
            value={newPuppyData.description}
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
