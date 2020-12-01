import React from "react";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm LoginFunction={LoginForm} />
    </div>
  );
}

export default Login;
