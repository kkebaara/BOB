//import React, { useState, useEffect } from "react";
import BusinessCard from "./BusinessCard";

function BusinessContainer({businesses}) {
  //const [businesses, setBusinesses] = useState([]);

/*  useEffect(() => {
    fetch("http://localhost:3000/businesses")
     .then((r) => r.json())
      .then(setBusinesses);
  }, []);

  console.log(businesses);*/

  return (
    <div>
      <ul className="cards">
        {businesses.map((business) => (
          <BusinessCard
            key={business.id}
            business={business}
            businesses={businesses}
          />
        ))}
      </ul>
    </div>
  );
}

export default BusinessContainer;
