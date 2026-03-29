import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup'


function App() {
  return (
    <Router>
      <Navbar/>
     
      <h2 className="text-center mt-4">Get Your Dream Land,Appartmet,Room,House Here</h2>
      <p className='text-center mt-4'>We are for you. We provide Land, Appartmet, Room, House exactly like your dream</p>
      <Home/>
      {/* <Login/> */}
      {/* <Signup/> */}
    </Router>
  );
}

export default App;
