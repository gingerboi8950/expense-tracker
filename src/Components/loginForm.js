import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function Revert() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }

  const handleLogin = async () => {
    try {
      const response = await axios.post( // sending username & password
        "http://localhost:3500/api/users/login",
        {
          username,
          password,
        }
      );
      // Store JWT token
      localStorage.setItem("token", response.data.token);
      alert("Login successful.");
      console.log("Login successful", response.data);
      Revert();
    } catch (error) {
      alert("Login failed.");
      console.log(
        "Login failed:",
        error.response?.data?.message || error.message
      );
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3500/api/users/register",
        { username, password }
      );
      console.log("Sign-Up successful");
      Revert();
    } catch (error) {
      console.log(
        "Sign-Up failed:",
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <>
      <input
        type="text"
        id="username"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        id="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleLogin();
          }
        }}
      />
      <br />
      <button id="loginBtn" onClick={handleLogin}>
        Login
      </button>
      <button id="signUpnBtn" onClick={handleSignUp}>
        Sign Up
      </button>
    </>
  );
}

export default LoginForm;
