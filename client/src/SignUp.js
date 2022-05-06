import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp({ setUser }) {
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => { 
          setUser(user)
          navigate('/')
      });
      }
    });
  }

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Sign Up</h1>
        <label htmlFor="username">Username:</label>
        <input
          className="form-item"
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          className="form-item"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <br />
        <label htmlFor="password">Confirm Password:</label>
        <input
          className="form-item"
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <br />
        <button type="submit" className="login-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;

