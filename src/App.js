import React from "react";
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
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/create-account">
          <CreateAccount />
        </Route>
        <Route exact path="/">
          <UserProfile />
        </Route>
      </Router>
    </div>
  );
}

export default App;
