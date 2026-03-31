import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Properties from "./components/Properties";
import MyFavourites from "./components/MyFavourites";
import ImageCarousel from "./components/Carousel";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Login/> */}
              <ImageCarousel/>
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

