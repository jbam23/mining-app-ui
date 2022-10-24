import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useState,useEffect } from 'react';
import MachineData from './components/MachineData';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Mining App Dashboard
        </p>
      </header>
      <MachineData/>
    </div>
  );

}

export default App;
