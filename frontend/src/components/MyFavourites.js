// import React from "react";
// import { useLocation } from "react-router-dom";

// const MyFavourites = () => {
//   const location = useLocation();
//   const property = location.state;

//   return (
//     <div className="container mt-4">
//       <h2>My Favourite Property</h2>

//       {property ? (
//         <div className="card mt-3" style={{ width: "300px" }}>
//           <img src={property.img} className="card-img-top" alt="fav" />
//           <div className="card-body">
//             <h5 className="card-title">Favourite Property</h5>
//             <p className="card-text">Saved from Properties page</p>
//           </div>
//         </div>
//       ) : (
//         <p>No favourite selected</p>
//       )}
//     </div>
//   );
// };

// export default MyFavourites;

import React, { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

const MyFavourites = () => {
  const { favourites, removeFromFavourites } = useContext(FavouritesContext);

  return (
    <div className="container mt-4">
      <h2>My Favourites ❤️</h2>

      <div className="row">
        {favourites.length === 0 ? (
          <p>No favourites yet</p>
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

                  {/* <button
                    onClick={() => removeFromFavourites(item.id)}
                    className="btn btn-danger"
                  >
                    Remove
                  </button> */}

                  <div className="d-flex justify-content-end">
                    <button
                      className="btn btn-info my-2"
                      onClick={() => removeFromFavourites(item.id)}
                    >
                      <i className="bi bi-trash-fill text-light"></i>
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
