import React from "react";

function FavoriteCards({ getFavorited, favoriteId, setGetFavorited }) {
  function handleDelete() {
    fetch(`favorites/${favoriteId}`, {
      method: "DELETE",
    });
    setGetFavorited((getFavorited) => {
     return getFavorited.filter((e) => e.id !== favoriteId)
    });
  }

  return (
    <div className="favorite_container">
      <div className="favorite_cards">
        <img src={getFavorited.image} alt={getFavorited.name} />
        <h3>{getFavorited.name}</h3>
        <h5>{getFavorited.type}</h5>
        <h5>{getFavorited.description}</h5>
        <button onClick={handleDelete} className="emoji-button-delete">
          🗑
        </button>
      </div>
    </div>
  );
}

export default FavoriteCards;



//       setGetFavorited((getFavorited) => (
//        getFavorited.filter((e) => {
//          e.id !== favoriteId;
//        }
//     )
      
// ))