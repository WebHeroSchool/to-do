import React from 'react';
// import './App.css';

let companyName = 'Facebook';
let year = 2013;
const qurentYear = new Date().getFullYear();


function App() {
  return (
    <div className="App">
      <header>
        Этот элемент надо было удалить?
      </header>
      
      <div>
        <ul style = {
          {textAlign: 'left',
          color: 'darkblue'}}>
        </ul>
      </div>
    </div>
  );
}

function MyElement() {
  return (
    <h1>My Element!</h1>
  );
}

export {App, MyElement };
// export default App;