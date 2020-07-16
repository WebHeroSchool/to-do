import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  const tasksData = [
    {value: 'Сверстать сайт с помощью HTML5 и CSS3'},
    {value: 'Написать игру на JS'},
    {value: 'Создать to-do приложение используюя React'},
  ];

  return (
    <div className='wrap'>
      <h1>Hello!!!</h1>
      <InputItem/>
      <ItemList tasksData = {tasksData} />
      <Footer remainder = '1'/>
    </div>
  );
};

export default App;
