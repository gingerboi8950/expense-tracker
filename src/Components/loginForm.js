import React, { useState } from "react";
import axios from "axios";
import "../CSS/style.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function Revert() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    setPassword("");
    setUsername("");
  }

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        // sending username & password
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
      window.location.href = "/expenses";
    } catch (error) {
      alert("Login failed.");
      console.log(
        "Login failed:",
        error.response?.data?.message || error.message
      );
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand">
            {/* <img
              src="./logo.png"
              alt="logo"
              width="60"
              height="48"
              className="d-inline-block align-text-top"
            /> */}
            Expense Tracker
          </a>
        </div>
      </nav>

      <div className="container loginContainer">
          <div class="row justify-center">
            <img src="./logo.png" className="logo" alt="logo"/>
          </div>

          <div class="flex justify-center">
            <span class="text-4xl text-white font-bold">Sign In</span>
          </div>
          
          <br/>

          <div className="flex justify-center items-center">
            <div classname="userInput flex flex-col intems-center">
              <div className="input-group mb-6 w-80">
                <input
                  className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg"
                  type="text"
                  id="username"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="input-group mb-6 w-80">
                <input
                  className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg"
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleLogin();
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <div class="flex justify-center">
            <button
              id="loginBtn"
              className="btn btn-secondary"
              onClick={handleLogin}
            >
            Login
            </button>
            <button
              id="signUpnBtn"
              className="btn btn-secondary"
              onClick={() => {
                window.location.href = "/signup";
              }}
            >
            Sign Up
            </button>
          </div>
      </div>
    </>
  );
}

export default LoginForm;
