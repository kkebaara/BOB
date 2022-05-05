import React, { useState, useEffect } from "react";
import FavoriteCards from "./FavoriteCards";

function FavoritesContainer() {
  const [getFavorited, setGetFavorited] = useState([]);
  console.log(getFavorited);
  
  useEffect(() => {
    fetch("/favorites")
      .then((r) => r.json())
      .then(setGetFavorited);
  }, []);
  console.log(setGetFavorited);


  return (
    <div className="FavoritesC">
      <div>
        {getFavorited.map((favorite) => (
          <FavoriteCards 
          key={favorite.id} 
          getFavorited={favorite.business} 
          favoriteId = {favorite.id} 
          setGetFavorited = {setGetFavorited}
          />
        ))}
      </div>
    </div>
  );
}

export default FavoritesContainer;
