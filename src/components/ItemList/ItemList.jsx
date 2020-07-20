import React from 'react';
import Item from '../Item/Item';


const ItemList = ({tasksData, onClick}) => (
  <ul>
    {tasksData.map(item => (
      <Item
        key={item.value}
        task = {item.value}
        status={item.isDone}
        onClick={onClick}
      />)
    )}
  </ul>
);

export default ItemList;
