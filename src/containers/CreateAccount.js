import React from "react";
import CreateAccountForm from "../components/CreateAccountForm";

// This is the container for the CreateAccountForm component
// This can be thought of like a div which would hold an image, like CreateAccountForm.js
function CreateAccount({ CreateAccountFunction }) {
  return (
    <div>
      <h1>Create Account</h1>
      <CreateAccountForm CreateAccountFunction={CreateAccountFunction} />
    </div>
  );
}

export default CreateAccount;
