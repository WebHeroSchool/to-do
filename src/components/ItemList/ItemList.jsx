import React from 'react';
import Item from '../Item/Item';

const ItemList = () => (
  <ul>
    <Item task = 'Сверстать сайт HTML и CSS'/>
    <Item task = 'Написать игру на JS'/>
    <Item task = 'Создать to-do приложение используюя React'/>
  </ul>
);

export default ItemList;
