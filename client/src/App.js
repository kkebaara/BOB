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
  const [user, setUser] = useState(null);
  const [favorite, setFavorite] = useState("");
  

  useEffect(()=>{
    fetch("/auth")
     .then((res) => {
      if(res.ok) {
        res.json().then(user => setUser(user))
      }
      })
   },[]) 

  useEffect(() => {
    fetch("/businesses")
      .then((r) => r.json())
      .then(setBusinesses);
  }, []);

  console.log(businesses);


  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<BusinessContainer businesses={businesses} user={user} />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/signup" element={<SignUp setUser={setUser}/>} />
        <Route path="/favorites" element={<FavoritesContainer/>} />
      </Routes>
    </div>
  );
}

export default App;