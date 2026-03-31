// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="./">
//           BuyDreams
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="/">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="/about">
//                 About
//               </a>
//             </li>

//           </ul>
//           <form className="d-flex justify-content-start" role="search">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button className="btn btn-outline-success" type="submit">
//               Search
//             </button>
//           </form>
//           <button type="button" class="btn mx-2 my-2 btn-info">Login</button>
//           <button type="button" class="btn mx-2 btn-info">Signup</button>
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         {/* Logo */}
//         {/* <Link className="navbar-brand" to="/">
//           <h1>BuyDreams</h1>
//         </Link> */}
//         <h1>ByeDreams</h1>

//         {/* Toggle button (mobile) */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           {/* Left side menu */}
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" to="/">
//                 Home
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" to="/about">
//                 About
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/properties">
//                 Properties
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/favourites">
//                 My Favourites
//               </Link>
//             </li>
//           </ul>

//           {/* Search bar (center/right) */}
//           <form className="d-flex me-3" role="search">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search property..."
//             />
//             <button className="btn btn-outline-success" type="submit">
//               Search
//             </button>
//           </form>

//           {/* Auth buttons */}
//           <div className="d-flex">
//             <Link to="/login" className="btn btn-info mx-2">
//               Login
//             </Link>
//             <Link to="/signup" className="btn btn-info">
//               Signup
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true if token exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h1>BuyDreams</h1>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
          
          {/* LEFT MENU */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {!isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
              </>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/properties">Properties</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/favourites">My Favourites</Link>
            </li>
          </ul>

          {/* SEARCH */}
          {/* <form className="d-flex me-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search property..."
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}

          {/* AUTH BUTTONS */}
          <div className="d-flex">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="btn btn-info mx-2">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-info">
                  Signup
                </Link>
              </>
            ) : (
              <button onClick={handleLogout} className="btn btn-danger">
                Signout
              </button>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
