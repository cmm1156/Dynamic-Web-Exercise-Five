import React from "react";

// This function is a piece of the webpage
// Think the function like an image that can be inserted into the page
// the CreateAccountFunction is in App.js and is the backend function that sends the email and password to Firebase
function CreateAccountForm({ CreateAccountFunction }) {
  // ** FIXED THE ISSUE 12/3/2020 : ^^^ CreateAccountFunction was missing as prop
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
