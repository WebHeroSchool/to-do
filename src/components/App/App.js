import React, {Component} from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends Component {
  state = {
    items: [
      {
        value: 'Сверстать сайт с помощью HTML5 и CSS3',
        isDone: true,
        id: 1,
      },
      {
        value: 'Написать игру на JS',
        isDone: true,
        id: 2,
      },
      {
        value: 'Создать to-do приложение используюя React',
        isDone: false,
        id: 3,
      },
    ]
  };

  removeItem = (itemId) => {
    const {items} = this.state;
    const removedItemIndex = items.findIndex(item => item.id === itemId)

    const newItems = [
      ...items.slice(0, removedItemIndex),
      ...items.slice(removedItemIndex + 1)
    ];

    this.setState({
      items: newItems
    })
  };

  toggleStatus = (taskId) => {
    const items =  this.state.items.map(item => {
      const newItem = {...item}
      if (item.id === taskId) {
        newItem.isDone = !item.isDone
      }
      return newItem;
    })

    this.setState({items});
  };

  render() {
    const {items} = this.state;
    const count = items.length
    return (
      <div className = {styles.wrap}>
        <h1 className = {styles.title} >My to-do list</h1>
        <InputItem/>
        <ItemList
          items={items}
          toggleStatus={this.toggleStatus}
          onDelete={this.removeItem}
        />
        <Footer remainder = {count}/>
      </div>
    );
  }
}

export default App;
