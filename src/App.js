import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import CheckOut from "./Components/CheckOut/CheckOut";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Order from "./Components/Order/Order";

import Admin from "./Components/Admin/Admin";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [checkOutInfo, setCheckOutInfo] = useState({});
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider
      value={[checkOutInfo, setCheckOutInfo, loggedInUser, setLoggedInUser]}
    >
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>

          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
          <Route path="/checkOut">
            <CheckOut />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
