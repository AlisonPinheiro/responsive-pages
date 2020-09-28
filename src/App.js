import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Router path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
