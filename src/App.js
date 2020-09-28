import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Router path="/" />
      </Switch>
    </Router>
  );
}

export default App;
