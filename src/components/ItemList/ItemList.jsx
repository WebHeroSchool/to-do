import React from 'react';
import Item from '../Item/Item';

const ItemList = ({items, toggleStatus}) => (
  <ul>
    {items.map(item => (
      <Item
        key={item.id}
        id={item.id}
        task = {item.value}
        status={item.isDone}
        toggleStatus={toggleStatus}
      />)
    )}
  </ul>
);

export default ItemList;
