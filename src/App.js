import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Отредактируйте и сохраните измекнения в  <code>src/App.js</code> для перезагрузки.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src = 'https://www.meme-arsenal.com/memes/47b8bbf0f3049843bb868f1addbcedc5.jpg' className = 'learn'/>
        </a>
      </header>
    </div>
  );
}

export default App;
