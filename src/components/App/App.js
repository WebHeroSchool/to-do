import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const App = () => {
  const tasksData = [
    {value: 'Сверстать сайт с помощью HTML5 и CSS3'},
    {value: 'Написать игру на JS'},
    {value: 'Создать to-do приложение используюя React'},
  ];


  return (
    <>
      <h1 style = {{textAlign: 'center'}}>Hello!!!</h1>
      <InputItem/>
      <ItemList tasksData = {tasksData} />
      <Footer remainder = '1'/>
    </>
  );
};

export default App;
