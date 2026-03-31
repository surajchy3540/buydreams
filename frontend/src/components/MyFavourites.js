import React, { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

const MyFavourites = () => {
  const { favourites, removeFromFavourites } = useContext(FavouritesContext);

  return (
    <div className="container mt-4">
      <h2 className="text-center">My Favourites ❤️</h2>

      <div className="row">
        {favourites.length === 0 ? (
          <h6 className="text-center mt-5">No favourites yet. Please Login First!</h6>
        ) : (
          favourites.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <div className="card">
                <img src={item.img} className="card-img-top" alt="fav" />
                <div className="card-body">
                  <h5 className="card-title">Beautiful Property</h5>
                  <p className="card-text">
                    Modern design with a great location.
                  </p>

                  <div
                    className="d-flex justify-content-end"
                    onClick={() => removeFromFavourites(item.id)}
                  >
                    <button className="btn btn-info border-0">
                      <i className="bi bi-trash-fill fs-5 text-light"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyFavourites;
