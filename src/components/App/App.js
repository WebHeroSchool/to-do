import React, { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const initItems = [
  { value: 'Сверстать сайт с помощью HTML5 и CSS3', isDone: true, id: 1 },
  { value: 'Написать игру на JS', isDone: true, id: 2 },
  { value: 'Создать to-do приложение используюя React', isDone: false, id: 3 },
];

const App = () => {

  const [ items, setItems ] = useState(initItems);
  const [ taskId, setTaskId] = useState(4)

  const count = items.length;

  const addItem = (label) => {
    setTaskId((id) => id + 1);

    const newItem = {
      value: label,
      isDone: false,
      id: taskId
    };

    setItems((items) => [...items, newItem]);
  };

  const deleteItem = (itemId) => {
    const remainedItems = items.filter(item => item.id !== itemId);
    setItems(remainedItems);
  };

  const toggleStatus = (taskIndex) => {
    const oldItem = items[taskIndex];
    const newItem = {...oldItem, isDone: !oldItem.isDone};
    const newItems = [
      ...items.slice(0, taskIndex),
      newItem,
      ...items.slice(taskIndex + 1)
    ];

    setItems(newItems);
  };

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>My to-do list</h1>
      <InputItem addItem={addItem}/>
      <ItemList
        items={items}
        toggleStatus={toggleStatus}
        onDelete={deleteItem}
      />
      <Footer remainder={count}/>
    </div>
  );
}

export default App;
