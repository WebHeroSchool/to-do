import React from 'react';
import logo from './logo.svg';
import './App.css';

let companyName = 'Facebook';
let year = 2013;
const qurentYear = new Date().getFullYear();


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Отредактируйте и сохраните изменения в  для перезагрузки.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            src = 'https://www.meme-arsenal.com/memes/47b8bbf0f3049843bb868f1addbcedc5.jpg'
            className = 'learn'
          />
        </a>
      </header>
      <div>
        <ul style = {
          {textAlign: 'left',
          color: 'darkblue'}}>

          <li>React был создан в {companyName} в {year} году, {qurentYear - 2013} лет назад</li>
          <li>{companyName && 'Да'}</li>
          <li>{companyName === companyName ? 'Да' : 'Нет'}</li>
          <li>{companyName === "VK" ? 'Да' : 'Нет'}</li>
          
          {year = undefined}
          {companyName = null}

          <li>{year, companyName, false, true}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
