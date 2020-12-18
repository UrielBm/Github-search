import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Pages/App/App.js";
import reportWebVitals from "./reportWebVitals";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
ReactDOM.render(
  <Router>
    <Route exact path="/">
      <App />
    </Route>
    <Route exact path="/usuario/:login">
      <Login />
    </Route>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
