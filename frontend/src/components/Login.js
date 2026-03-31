// import React from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-12 col-sm-8 col-md-6 col-lg-4">
//           <form className="p-4 border rounded shadow-sm">
//             <h3 className="text-center mb-4">Login</h3>
//             <div className="mb-3">
//               <label className="form-label">Email address</label>

//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Enter email"
//                 autoComplete="email"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Enter password"
//                 autoComplete="current-password"
//                 required
//               />
//             </div>
//             <button type="submit" className="btn btn-primary w-100">
//               Login
//             </button>
//             Forgotten password?
//             <Link to="/signup" className="btn mx-2 my-4 btn-info">
//               Signup
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// src/components/Login.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);

      // save user in localStorage
      localStorage.setItem("token", res.data.token);

      alert("Login successful");
      navigate("/properties");

      window.location.reload();

      
    } catch (err) {
      console.log(err); // 👈 IMPORTANT

      if (err.response) {
        alert(err.response.data.msg); // backend uses "msg"
      } else {
        alert("Server not responding");
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <form
            className="p-4 border rounded shadow-sm"
            onSubmit={handleSubmit}
          >
            <h3 className="text-center mb-4">Login</h3>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                autoComplete="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
            <div className="text-center mt-3">
              Don't have an account?
              <Link to="/signup" className="btn mx-2 btn-info">
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
