import React from "react";
import "./LoginForm.css";

function LoginForm({ isVisible }) {
  return (
    <div className={`login-form ${isVisible ? "visible" : ""}`}>
      <input type="text" class="form-control" placeholder="Username" />
      <input type="password" class="form-control" placeholder="Password" />
      <br></br>
      <button type="submit" class="btn btn-primary">Login</button>
    </div>
  );
}

export default LoginForm;
