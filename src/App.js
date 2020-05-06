import React, { useState, useEffect } from "react";
import "./style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import firebase from "./firebase";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='all-wrap'>
            <PrivateRoute exact path='/' component={Home} />
            <Route exact path='/components/Login' component={Login} />
            <Route exact path='/components/Signup' component={Signup} />
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}
export default App;
