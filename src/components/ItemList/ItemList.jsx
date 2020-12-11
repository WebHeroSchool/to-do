import React from 'react';
import Item from '../Item/Item';

const ItemList = ({items, toggleStatus, onDelete}) => (
  <ul>
    {items.map((item, index) => (
      <Item
        key={item.id}
        id={item.id}
        task={item.value}
        status={item.isDone}
        toggleStatus={toggleStatus}
        onDelete={onDelete}
        indexInList={index}
      />)
    )}
  </ul>
);

ItemList.defaultProps = {
  items: [
    {value: 'Сделать еще что-то', isDone: false, id: 100}
  ]
}

export default ItemList;
