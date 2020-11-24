import React from "react";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm LoginFunction={LoginFunction} />
    </div>
  );
}

export default Login;
