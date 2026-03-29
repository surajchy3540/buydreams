import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <form className="p-4 border rounded shadow-sm">
            <h3 className="text-center mb-4">Login</h3>
            <div className="mb-3">
              <label className="form-label">Email address</label>

              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                autoComplete="email"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                autoComplete="current-password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
            Forgotten password?
            <Link to="/signup" className="btn mx-2 my-4 btn-info">
              Signup
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;