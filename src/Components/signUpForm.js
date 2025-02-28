import { useState } from "react";
import axios from "axios";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function Revert() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    setPassword("");
    setUsername("");
  }

  const alertPlaceholder = document.getElementById("alertPlaceholder");
  const appendAlert = (message) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-danger alert-dismissible" role="alert">`,
      `<div>${message}</div>`,
      `<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`,
      `</div>`,
    ].join("");

    alertPlaceholder.append(wrapper);
  };
  const handleSignUp = async () => {
    if (!username || !password) {
        
        appendAlert("Invalid username or password");
        
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3500/api/users/register",
        { username, password }
      );
      console.log("Sign-Up successful");
      Revert();
      window.location.href = "/";
    } catch (error) {
      console.log(
        "Sign-Up failed:",
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
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            /> */}
            Expense Tracker
          </a>
        </div>
      </nav>

      <div id="alertPlaceholder"></div>

      <div className="container loginContainer">
        <div class="row justify-center">
          <img src="./logo.png" className="logo" alt="logo"/>
        </div>

        <div class="flex justify-center">
          <span class="text-4xl text-white font-bold">Sign Up</span>
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
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleSignUp();
                    }
                  }}
                />
              </div>
            </div>
        </div>

        <div class="flex justify-center">
          <button
            id="signUpBtn"
            className="btn btn-secondary"
            onClick={handleSignUp}
          >
          Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
