import React from 'react';
import logo from './logo.svg';
import './App.css';
import {count, num} from './Numbers';

let companyName = 'Facebook';
let year = 2013;
const qurentYear = new Date().getFullYear();


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      
      <div>
        <ul style = {
          {textAlign: 'left',
          color: 'darkblue'}}>

          <li>count * num = {count * num }</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
