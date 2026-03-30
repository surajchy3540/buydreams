// import React, { useState } from "react";
// import { FaHeart } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import img1 from "./image/appart1.jpg";
// import img2 from "./image/appart2.jpg";
// import img3 from "./image/land1.jpg";
// import img4 from "./image/land2.jpg";
// import img5 from "./image/room1.jpg";
// import img6 from "./image/room2.jpg";

// const Properties = () => {
//   const images = [img1, img2, img3, img4, img5, img6, img1, img2, img3];

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         {images.map((img, index) => (
//           <div className="col-md-4 mb-4" key={index}>
//             <Card img={img} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const Card = ({ img }) => {
//   const [liked, setLiked] = useState(false);

//   return (
//     <div className="card position-relative">
//       {/* <FaHeart
//         onClick={() => setLiked(!liked)}
//         style={{
//           position: 'absolute',
//           top: '10px',
//           right: '10px',
//           cursor: 'pointer',
//           color: liked ? 'red' : 'white',
//           fontSize: '24px'
//         }}
//       /> */}

//       <img src={img} className="card-img-top" alt="property" />

//       <div className="card-body">
//         <h5 className="card-title">Beautiful Property</h5>
//         <p className="card-text">Modern design with a great location.</p>
//         <div className="d-flex justify-content-end">
//           <Link
//             to="/favourites"
//             className="btn btn-info my-2"
//             style={{ width: "70px", height: "35px", cursor: "pointer" }}
//           >
//             Like
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Properties;

import React, { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
import img1 from "./image/appart1.jpg";
import img2 from "./image/appart2.jpg";
import img3 from "./image/land1.jpg";
import img4 from "./image/land2.jpg";
import img5 from "./image/room1.jpg";
import img6 from "./image/room2.jpg";

const Properties = () => {
  const images = [img1, img2, img3, img4, img5, img6, img1, img2, img3];

  return (
    <div className="container mt-4">
      <div className="row">
        {images.map((img, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card img={img} id={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Card = ({ img, id }) => {
  const { addToFavourites } = useContext(FavouritesContext);

  return (
    <div className="card position-relative">
      <img src={img} className="card-img-top" alt="property" />

      <div className="card-body">
        <h5 className="card-title">Beautiful Property</h5>
        <p className="card-text">Modern design with a great location.</p>

        <div className="d-flex justify-content-end">
          <button
            onClick={() => addToFavourites({ id, img })}
            className="btn btn-info my-2"
            style={{ width: "70px", height: "35px", cursor: "pointer" }}
          >
            Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default Properties;

