import React, { Component } from "react";
import './App.css';
import { Routes } from './Routes'
import { BrowserRouter as Router, } from "react-router-dom";
import NavComp from "./Pages/Navbar";
class App extends Component {
  constructor() {
    super();

    this.state = {
      accounts: null,
      contract: null,
      balance:0,
    };
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <NavComp />
          <Routes />
        </Router>
      </div>
    );
  }
}
export default App;