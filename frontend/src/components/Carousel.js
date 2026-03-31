// import React from "react";
// import img1 from "./image/appart3.jpg";
// import img2 from "./image/appart5.webp";
// import img3 from "./image/appart4.jpg";

// const ImageCarousel = () => {
//   return (
//     <div
//       id="carouselExampleAutoplaying"
//       className="carousel slide"
//       data-bs-ride="carousel"
//     >
//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           <img src={img1} className="d-block w-100" alt="Appartment 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={img2} className="d-block w-100" alt="Appartment 2" />
//         </div>
//         <div className="carousel-item">
//           <img src={img3} className="d-block w-100" alt="Land 1" />
//         </div>
//       </div>

//       <button
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleAutoplaying"
//         data-bs-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>

//       <button
//         className="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleAutoplaying"
//         data-bs-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default ImageCarousel;

import React from "react";
import img1 from "./image/appart3.jpg";
import img2 from "./image/appart5.jpg";
import img3 from "./image/appart4.jpg";

const ImageCarousel = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={img1}
            className="d-block w-100"
            alt="Appartment 1"
            style={{ maxHeight: "400px", objectFit: "cover",borderRadius: "8px" }} // 🔥 reduced height
          />
          
        </div>
        <div className="carousel-item">
          <img
            src={img2}
            className="d-block w-100"
            alt="Appartment 2"
            style={{ maxHeight: "400px", objectFit: "cover",borderRadius: "8px" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={img3}
            className="d-block w-100"
            alt="Land 1"
            style={{ maxHeight: "400px", objectFit: "cover",borderRadius: "8px" }}
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ImageCarousel;
