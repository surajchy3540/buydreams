// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import Properties from "./components/Properties";

// function App() {
//   return (
//     <Router>
//       <Navbar />
     
//       <h2 className="text-center mt-4">
//         Get Your Dream Land,Appartmet,Room,House Here
//       </h2>
//       <p className="text-center mt-4">
//         We are for you. We provide Land, Appartmet, Room, House exactly like
//         your dream
//       </p>
//        <Properties/>
//       <Routes>
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/properties" element={<Properties />} />
    
//       </Routes>
        
//     </Router>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Properties from "./components/Properties";
import MyFavourites from "./components/MyFavourites";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <h2 className="text-center mt-4">
                Get Your Dream Land, Apartment, Room, House Here
              </h2>
              <p className="text-center mt-4">
                We are for you. We provide Land, Apartment, Room, House exactly like your dream
              </p> */}
              {/* <Properties /> */}
              <Login/>
            </>
          }
        />

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/favourites" element={<MyFavourites />} />

      </Routes>
    </Router>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import Properties from "./components/Properties";

// const PrivateRoute = ({ children }) => {
//   const user = localStorage.getItem("user");
//   return user ? children : <Navigate to="/login" />;
// };

// function App() {
//   return (
//     <Router>
//       <Routes>

//         <Route path="/" element={<Navigate to="/login" />} />

//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />

//         <Route
//           path="/properties"
//           element={
//             <PrivateRoute>
//               <Properties />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;