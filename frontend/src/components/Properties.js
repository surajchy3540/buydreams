import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import img1 from './image/appart1.jpg';
import img2 from './image/appart2.jpg';
import img3 from './image/land1.jpg';
import img4 from './image/land2.jpg';
import img5 from './image/room1.jpg';
import img6 from './image/room2.jpg';

const Properties = () => {
  const images = [img1, img2, img3, img4, img5, img6, img1, img2, img3];

  return (
    <div className="container mt-4">
      <div className="row">
        {images.map((img, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card img={img} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Card = ({ img }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card position-relative">
      <FaHeart
        onClick={() => setLiked(!liked)}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          cursor: 'pointer',
          color: liked ? 'red' : 'white',
          fontSize: '24px'
        }}
      />

      <img src={img} className="card-img-top" alt="property" />

      <div className="card-body">
        <h5 className="card-title">Beautiful Property</h5>
        <p className="card-text">
          Modern design with a great location.
        </p>
      </div>
    </div>
  );
};

export default Properties;

// import { useEffect, useState } from "react";
// import API from "../api";

// function Properties() {
//   const [properties, setProperties] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     fetchProperties();
//   }, []);

//   const fetchProperties = async () => {
//     const res = await API.get("/properties");
//     setProperties(res.data);
//   };

//   const addToFavorites = (property) => {
//     setFavorites([...favorites, property]);
//   };

//   return (
//     <div>
//       <h2>Properties</h2>

//       {properties.map((p) => (
//         <div key={p._id}>
//           <h3>{p.title}</h3>
//           <p>{p.price}</p>
//           <p>{p.location}</p>
//           <button onClick={() => addToFavorites(p)}>❤️ Like</button>
//         </div>
//       ))}

//       <h2>My Favorites</h2>

//       {favorites.map((f, index) => (
//         <div key={index}>
//           <h4>{f.title}</h4>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Properties;