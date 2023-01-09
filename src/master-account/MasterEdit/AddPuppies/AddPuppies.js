import React, { useState } from "react";
import "./AddPuppies.css";

export default function AddPuppies() {
  const [newPuppyData, setPuppyData] = useState({
    name: "",
    gender: "",
    photo: "",
    description: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setPuppyData((dogData) => {
      return {
        ...dogData,
        [name]: value, // Will change the value of the form name
      };
    });
  }

  function submitForm(event) {
    event.preventDefault();
    console.log(newPuppyData);
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
          <input
            type="text"
            value={newPuppyData.gender}
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
