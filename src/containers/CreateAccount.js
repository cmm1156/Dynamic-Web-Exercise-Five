import React from "react";
import CreateAccountForm from "../components/CreateAccountForm";

// This is the container for the CreateAccountForm component
// This can be thought of like a div which would hold an image, like CreateAccountForm.js
function CreateAccount({ CreateAccountFunction }) {
  return (
    <div>
      <h1>Create Account</h1>
      <CreateAccountForm CreateAccountFunction={CreateAccountFunction} />
      {/*CreateAccountFunction is a variable?
       *This is very similar to UserProfile.js. It is just passing down the prop to the CreateAccountForm */}
    </div>
  );
}

export default CreateAccount;
