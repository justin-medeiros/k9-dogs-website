import React, { useState } from "react";
import "./AddDogs.css";

export default function AddDogs() {
  const [newDogData, setNewDogData] = useState({
    name: "",
    gender: "",
    photo: "",
    description: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewDogData((dogData) => {
      return {
        ...dogData,
        [name]: value, // Will change the value of the form name
      };
    });
  }

  function submitForm(event) {
    event.preventDefault();
    console.log(newDogData);
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
          <input
            type="text"
            value={newDogData.gender}
            placeholder="Last Name"
            onChange={handleChange}
            name="gender"
          ></input>
          <input
            type="file"
            name="image"
            onChange={(event) => {
              console.log(event.target.files[0]);
            }}
          />
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
