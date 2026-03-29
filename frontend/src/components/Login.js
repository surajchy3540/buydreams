// import React from "react";
//  <div className="conatiner">
//     const Login = () => {
//   return (
//     <div>
//       <form>
//         <div className="mb-3">
//           <label for="exampleInputEmail1" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="exampleInputEmail1"
//             aria-describedby="emailHelp"
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div className="mb-3">
//           <label for="exampleInputPassword1" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="exampleInputPassword1"
//           />
//         </div>
//         <div className="mb-3 form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="exampleCheck1"
//           />
//           <label className="form-check-label" for="exampleCheck1">
//             Check me out
//           </label>
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
//  </div>

// export default Login;

// import React from "react";

// const Login = () => {
//   return (
//     <div className="container">
//       <form>

//         <div className="mb-3">
//           <label className="form-label">Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//           />
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>

//       </form>
//     </div>
//   );
// };

// export default Login;
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
