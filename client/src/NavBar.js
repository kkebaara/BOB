import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
      <br />
      <br />
      {user ? (
        <>
          <NavLink className="nav-item" to="/">
            Home
          </NavLink>
          <NavLink className="nav-item" to="/favorites">
            Favorites
          </NavLink>
          <br />
          <br />
          <br />
          <button onClick={handleLogoutClick}>Logout</button>
        </>
      ) : (
        <>
          <NavLink className="nav-item" to="/">
            Home
          </NavLink>
          <NavLink className="nav-item" to="/signup">
            Signup
          </NavLink>
          <NavLink className="nav-item" to="/login">
            Login
          </NavLink>
          <h1>Please Login or Signup</h1>
        </>
      )}
    </header>
  );
}

export default NavBar;