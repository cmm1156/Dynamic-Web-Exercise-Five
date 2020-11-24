import React from 'react';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import './App.css';

import Login from "./containers/Login";
import CreateAccount from from "./containers/CreateAccount";
import UserProfile from "./containers/UserProfile"

function App() {
  return <div className="App">
    <Router>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/create-account">
        <CreateAccount />
      </Route>
      <Route exact pth="/">
        <UserProfile />
      </Route>
    </Router>
  </div>

export default App;
