import React from "react";
import CreateAccountFunction from "../App.js";

// This function is a piece of the webpage
// Think the function like an image that can be inserted into the page
// the CreateAccountFunction is in App.js and is the backend function that sends the email and password to Firebase
function CreateAccountForm() {
  return (
    <div>
      <form className="SignupForm" onSubmit={(e) => CreateAccountFunction(e)}>
        <label htmlFor="createEmail">Email</label>
        <input type="email" name="createEmail" />

        <label htmlFor="createPassword">Password</label>
        <input type="password" name="createPassword" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreateAccountForm;
