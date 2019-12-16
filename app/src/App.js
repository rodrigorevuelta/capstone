import React from 'react';
import { Router, Link } from "@reach/router";

import Home from "./modules/home/home"
import Prediction from "./modules/prediction/prediction";
import Storage from "./modules/storage/storage";
import Analysis from "./modules/analysis/analysis";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="prediction">Prediction</Link>
            <Link to="storage">Storage</Link>
            <Link to="analysis">Analysis</Link>
          </nav>
        </div>
      </header>
      <Router>
            <Home path="/" />
            <Prediction path="prediction"/>
            <Storage path="storage"/>
            <Analysis path="analysis"/>
      </Router>
      <p><div><span></span></div></p>
    </div>
  );
}

export default App;
