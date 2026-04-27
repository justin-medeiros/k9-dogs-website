"use client";

import OurDogsCard from "./items/OurDogsCard";
import "./OurDogs.css";

export default function OurDogsPage({ dogData }) {


  return (
    <div
      
      
      
      className="ourdogs--container"
    >
      <div className="ourdogs--top--container">
        <div
          
          
          
          className="ourdogs--title--container"
        >
          <h1 className="ourdogs--title">Our Dogs</h1>
        </div>
        <p
          
          
          
          className="ourdogs--subtitle"
        >
          Meet the stars of our kennel
        </p>
      </div>
      <div  className="ourdogs--dogs--container">
        {dogData.map((data) => (
          <OurDogsCard key={data.name} dogInfo={data} />
        ))}
      </div>
    </div>
  );
}
