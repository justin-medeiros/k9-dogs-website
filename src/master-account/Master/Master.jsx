import React from "react";
import "./Master.css";
import ItemCard from "./components/ItemCard";
import { useNavigate } from "react-router-dom";
import { MasterChoices } from "../../constants/MasterChoices";

export default function Master() {
  const navigate = useNavigate();

  function routeChange(choice) {
    switch (choice) {
      case MasterChoices.KENNEL:
        navigate("addkennel");
        break;
      case MasterChoices.PUPPIES:
        navigate("addpuppies");
        break;
      default:
        navigate("addphotos");
        break;
    }
  }

  return (
    <div className="master">
      <div className="master--container">
        <ItemCard
          title={MasterChoices.KENNEL}
          handleClick={() => routeChange(MasterChoices.KENNEL)}
        />
        <ItemCard
          title={MasterChoices.PUPPIES}
          handleClick={() => routeChange(MasterChoices.PUPPIES)}
        />
        <ItemCard
          title={MasterChoices.PHOTO_GALLERY}
          handleClick={() => routeChange(MasterChoices.PHOTO_GALLERY)}
        />
      </div>
    </div>
  );
}
