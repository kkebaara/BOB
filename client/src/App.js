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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [favorite, setFavorite] = useState("");

  useEffect(() => {
    fetch("/businesses")
      .then((r) => r.json())
      .then(setBusinesses);
  }, []);

  console.log(businesses);

/*
        <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/businesses" element={<BusinessContainer businesses ={businesses} />} />
        <Route path="/favorites" element={<FavoritesContainer />} />
      </Routes>*/





return (
    <>
      <header className="header-image"></header>
      <div className="navbar">
        <span className="app-name">BOB - </span>
        <span className="header-description">
          Black Owned Businesses Around You
        </span>
      </div>

      <NavBar user={user} setUser={setUser} />
      <br />
      <>
        {user ? (
          <Routes>
            <Route exact path="/" element={<Homepage user={user} />} />
            <Route
              path="businesses"
              element={
                <BusinessContainer
                  businesses = {businesses}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <FavoritesContainer 
                setFavorite={favorite}
                user={user} 
                 />
              }
            />
          </Routes>
        ) : (
          <Routes>
            <Route
              path="/signup"
              element={
                <SignUp
                  setUser={setUser}
                  username={username}
                  setUsername={setUsername}
                  password={password}
                  setPassword={setPassword}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  setUser={setUser}
                  username={username}
                  setUsername={setUsername}
                  password={password}
                  setPassword={setPassword}
                />
              }
            />
          </Routes>
        )}
      </>
    </>
  );
}

export default App;