// import React from "react";

// const Signup = () => {
//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-12 col-sm-8 col-md-6 col-lg-4">
//           <form className="p-4 border rounded shadow-sm">
//             <h3 className="text-center mb-4">Signup</h3>
//             <div className="mb-3">
//               <label className="form-label">Name</label>
//               <input
//                 type="string"
//                 className="form-control"
//                 placeholder="Enter Your Name"
//                 autoComplete="name"
//                 required
//               />
//             </div>
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
//               Signup
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// src/components/Signup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/signup", form);

      alert("Signup successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.msg || "Error");
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
            <h3 className="text-center mb-4">Signup</h3>

            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                autoComplete="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

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
                autoComplete="new-password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
