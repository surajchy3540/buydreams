import React from "react";
import { useLocation } from "react-router-dom";

const MyFavourites = () => {
  const location = useLocation();
  const property = location.state;

  return (
    <div className="container mt-4">
      <h2>My Favourite Property</h2>

      {property ? (
        <div className="card mt-3" style={{ width: "300px" }}>
          <img src={property.img} className="card-img-top" alt="fav" />
          <div className="card-body">
            <h5 className="card-title">Favourite Property</h5>
            <p className="card-text">Saved from Properties page</p>
          </div>
        </div>
      ) : (
        <p>No favourite selected</p>
      )}
    </div>
  );
};

export default MyFavourites;