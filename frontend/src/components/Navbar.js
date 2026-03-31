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
              <button onClick={handleLogout} className="btn btn-info">
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
