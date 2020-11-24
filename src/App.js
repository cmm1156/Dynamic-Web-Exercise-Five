import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import firebase from "firebase/app"; // import everything as firebase
import "firebase/auth";

// Styles
import "./App.css"; // use . if the desired file is in the same root folder as this current one
// App.css is in the same folder location as this App.js file

// Pages
import Login from "./containers/Login";
import CreateAccount from "./containers/CreateAccount";
import UserProfile from "./containers/UserProfile";
// Components
import Header from "./components/Header";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY, // replace API key with .env file reference
  authDomain: "exercise-five-bd520.firebaseapp.com",
  databaseURL: "https://exercise-five-bd520.firebaseio.com",
  projectId: "exercise-five-bd520",
  storageBucket: "exercise-five-bd520.appspot.com",
  messagingSenderId: "1310410361",
  appId: "1:1310410361:web:8c3505b72eccd1b7f8b6a8",
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // boolean to determine if logged in or not
  const [loading, setLoading] = useState(true); // is page loading?
  // const [userInformation, setUserInformation] = useState({});

  useEffect(() => {
    // If firebase is not already initialized
    if (!firebase.apps.length) {
      // Initializes firebase
      firebase.initializeApp(firebaseConfig);
    }
  }, [firebaseConfig]);

  // Function for logging in
  function LoginFunction(e) {
    // This is what you will run when you want to log in
    e.preventDefault();
    const email = e.currentTarget.loginEmail.value;
    const password = e.currentTarget.loginPassword.value;

    // console.log(email, password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log("LOGIN RESPONSE", response);
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.log("LOGIN ERROR", error);
      });
  }

  //Function for logging out
  function LogoutFunction() {
    // Function to run when you want to log out...
  }

  // Function for creating an account
  function CreateAccountFunction(e) {
    // what will run when you create an account...
    e.preventDefault();
    const email = e.currentTarget.createEmail.value;
    const password = e.currentTarget.createPassword.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log("VALID ACCOUNT CREATED FOR:", email, response);
        setLoggedIn(true);
      })
      .catch(function (error) {
        console.log("ACCOUNT CREATION FAILED", error);
      });
  }

  return (
    <div className="App">
      <Header loggedIn={loggedIn} LogoutFunction={LogoutFunction} />
      <Router>
        <Route exact path="/login">
          <Login LoginFunction={LoginFunction} />
        </Route>
        <Route exact path="/create-account">
          <CreateAccount CreateAccountFunction={CreateAccountFunction} />
        </Route>
        <Route exact path="/">
          <UserProfile />
        </Route>
      </Router>
    </div>
  );
}

export default App;
