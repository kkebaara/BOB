import React, { useState } from "react";
//import FavoriteCards from "./FavoriteCards";

function BusinessCard({ business, userId}) {
  const [favorited, setFavorited] = useState(true);

  function handleFavoriteButtton(e) {
    console.log("THIS IS THIS")

    setFavorited(!favorited);

    fetch("/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ 
          user_id: userId,
          business_id: business.id}),
    }).then((r) => r.json());
    console.log(business);
  }

  return (
    <div>
      <div>
        <img src={business.image} alt={business.name} />
        <h3>{business.name}</h3>
        <h5>{business.type}</h5>
        <h5>{business.description}</h5>

        {favorited && (
          <button onClick={handleFavoriteButtton} className="like_button">
            Favorite
          </button>
        )}
        {!favorited && (
          <button onClick={handleFavoriteButtton} className="like_button">
            UnFavorite
          </button>
        )}
        {/* <button onClick={handleFavoriteButtton} className="like_button">
          {favorited ? "Favorite" : "Unfavorite"}
        </button> */}
      </div>
    </div>
  );
}

export default BusinessCard;