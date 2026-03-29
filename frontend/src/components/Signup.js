import React from 'react'
// import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <form className="p-4 border rounded shadow-sm">
            <h3 className="text-center mb-4">Signup</h3>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="string"
                className="form-control"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
