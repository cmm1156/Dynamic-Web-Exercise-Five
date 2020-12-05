// these are Hooks being imported from the react package we downloaded with 'create-react-app'
// a Hook is a special function that lets you "hook into" React features; this is what makes React more powerful than regular JavaScript
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import firebase from "firebase/app"; // names everything that imports from the firebase/app package as 'firebase'
import "firebase/auth";

/* Hooks:
useState is a Hook that lets you add React state to function components
useEffect is a Hook that runs every time the state of the element in the dependency array changes
*/

// Styles
import "./App.css"; // use . if the desired file is in the same root folder as this current one
// App.css is in the same folder location as this App.js file

// Pages (containers)
import Login from "./containers/Login";
import CreateAccount from "./containers/CreateAccount";
import UserProfile from "./containers/UserProfile";
// Components
import Header from "./components/Header";

// My web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "exercise-five-bd520.firebaseapp.com",
  databaseURL: "https://exercise-five-bd520.firebaseio.com",
  projectId: "exercise-five-bd520",
  storageBucket: "exercise-five-bd520.appspot.com",
  messagingSenderId: "1310410361",
  appId: "1:1310410361:web:b4916750ce0bc669f8b6a8",
};

// Don't do this, you do not want to initialize app every time the website loads
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// this function is the App
function App() {
  // define variables to be used below
  const [loggedIn, setLoggedIn] = useState(false); // boolean to determine if logged in or not
  const [loading, setLoading] = useState(true); // is page loading?
  const [userInformation, setUserInformation] = useState({});

  // Ensure app is initialized when it is ready
  useEffect(() => {
    // If firebase is not already initialized
    // if there are no firebase apps in the array of apps on your firebase config / account, initialize the app
    if (!firebase.apps.length) {
      // this takes from the package we named 'firebase' on line 3
      // Initializes firebase
      firebase.initializeApp(firebaseConfig);
    }
    console.log("Firebase Initialized");
  }, [firebaseConfig]);

  // Check to see if use is logged in...
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is logged in
        setLoggedIn(true);
        setUserInformation(user); // user is an filled object {}
      } else {
        setLoggedIn(false);
      }
      setLoading(false);
    });
  }, []);

  // Function for logging in
  function LoginFunction(e) {
    // This is what you will run when you want to log in
    e.preventDefault();
    const email = e.currentTarget.loginEmail.value;
    const password = e.currentTarget.loginPassword.value;

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
    firebase
      .auth()
      .signOut()
      .then(function () {
        setLoggedIn(false);
        setUserInformation({}); // If user logs out, I want to clear the user information with the empty {} object
      })
      .catch(function (error) {
        console.log("LOGOUT ERROR", error);
      });
  }

  // Function for creating an account
  // this is basically the same as LoginFunction, but it uses the .createUserWithEmailAndPassword(arg1,arg2) method instead of .signIn...() method
  // SEE Firebase documentation for the login and create account methods
  function CreateAccountFunction(e) {
    // what will run when you create an account...
    e.preventDefault();
    const email = e.currentTarget.createEmail.value; // .createEmail is the name of the input, SEE CreateAccountForm htmlFor='createEmail'
    const password = e.currentTarget.createPassword.value; // SEE CreateAccountForm name='createPassword'
    // password variable will take data from the input that I set 'createPassword' with name='createPassword'

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

  // COMPONENTS are like an image or div on a page
  // CONTAINERS are the pages themselves
  // this entire codebase uses small chunks of code (components / containers) to be clear and concise

  if (loading) return null;

  return (
    <div className="App">
      <Header loggedIn={loggedIn} LogoutFunction={LogoutFunction} />
      <Router>
        <Route exact path="/login">
          {/* If someone is logged in, do not take them to login page - take them to User Profile
          this is an if/else statement. If not logged in, the login container will show on the page,
          if already logged in, the website will redirect the user to the main page */}
          {!loggedIn ? (
            <Login LoginFunction={LoginFunction} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="/create-account">
          {/* If someone is logged in, do not take them to create account page - take them to User Profile */}
          {!loggedIn ? (
            <CreateAccount CreateAccountFunction={CreateAccountFunction} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="/">
          {/* if someone is not logged in, do not take them to User Profile page - take them to Login Page */}
          {!loggedIn ? (
            <Redirect to="/login" />
          ) : (
            <UserProfile userInformation={userInformation} />
            /* userInformation is a variable of the user object */
          )}
        </Route>
      </Router>
    </div>
  );
}

export default App;
