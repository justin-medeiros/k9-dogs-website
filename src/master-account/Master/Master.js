import React, { useState } from "react";
import "./Master.css";
import ItemCard from "./components/ItemCard";
import { useNavigate } from "react-router-dom";
import { MasterChoices } from "../../constants/MasterChoices";

export default function Master() {
  const navigate = useNavigate();

  function routeChange(choice) {
    switch (choice) {
      case MasterChoices.ADD_DOGS:
        navigate("/addkennel");
        break;
      case MasterChoices.ADD_PUPPIES:
        navigate("/addpuppies");
        break;
      default:
        navigate("/addphotos");
        break;
    }
  }

  return (
    <div className="master">
      <div className="master--container">
        <ItemCard
          title={MasterChoices.ADD_DOGS}
          handleClick={() => routeChange(MasterChoices.ADD_DOGS)}
        />
        <ItemCard
          title={MasterChoices.ADD_PUPPIES}
          handleClick={() => routeChange(MasterChoices.ADD_PUPPIES)}
        />
        <ItemCard
          title={MasterChoices.ADD_PHOTOS}
          handleClick={() => routeChange(MasterChoices.ADD_PHOTOS)}
        />
      </div>
    </div>
  );
}
