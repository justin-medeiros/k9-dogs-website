import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import OurDogsCard from "./items/OurDogsCard";
import "./OurDogs.css";

export default function OurDogs() {
  const [ourDogs, setOurDogs] = useState([]);

  useEffect(() => {
    async function getDogs() {
      const querySnapshot = await getDocs(collection(db, "dogs"));
      const allDogs = querySnapshot.docs.map((doc) => {
        const dogData = doc.data();
        return (
          <div key={doc.id}>
            <OurDogsCard dogInfo={dogData} />
          </div>
        );
      });
      setOurDogs(allDogs);
    }
    getDogs();
  }, []);

  return (
    <div className="ourdogs--container">
      <div className="ourdogs--top--container">
        <div className="ourdogs--title--container">
          <h1 className="ourdogs--title">Our Dogs</h1>
        </div>
        <h3 className="ourdogs--subtitle">Meet the stars of our kennel!</h3>
      </div>
      <div className="ourdogs--dogs--container">{ourDogs}</div>
    </div>
  );
}
