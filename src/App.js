import React from 'react';

const ItemList = () => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

const App = () => {
  return (
    <div>
      <h1 style = {{textAlign: 'center'}}>Hello!!!</h1>
      <ItemList />
    </div>
  )
};


export default App;