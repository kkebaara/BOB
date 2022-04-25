import "./App.css";
import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import BusinessContainer from "./BusinessContainer";
import NavBar from "./NavBar";
import Homepage from "./Homepage";
import FavoritesContainer from "./FavoritesContainer";

import SignUp from "./SignUp";
import Login from "./Login";

function App() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    fetch("/businesses")
      .then((r) => r.json())
      .then(setBusinesses);
  }, []);

  console.log(businesses);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/businesses" element={<BusinessContainer businesses ={businesses} />} />
        <Route path="/favorites" element={<FavoritesContainer />} />
      </Routes>
    </div>
  );
}

export default App;