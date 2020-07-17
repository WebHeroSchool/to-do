import React from 'react';
import Item from '../Item/Item';


const ItemList = ({tasksData}) => (
  <ul>
    {tasksData.map(item => (
      <Item
        key={item.value}
        task = {item.value}
        status={item.isDone}
      />)
    )}
  </ul>
);

export default ItemList;
