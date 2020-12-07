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
    ],
    count: 3,
  };

  toggleStatus = (statusFromItem) => {
    // eslint-disable-next-line no-console
    // console.log(statusFromItem);
    console.log(this.state.items[2].isDone === statusFromItem)
  };

  plus = () => {
    this.setState(state => ({
      count: ++state.count
    }))
  };

  render() {
    const {items, count} = this.state;
    return (
      <div className = {styles.wrap}>
        <button onClick={this.plus}>+</button>
        <h1 className = {styles.title} >My to-do list {count}</h1>
        <InputItem/>
        <ItemList items={items} toggleStatus={this.toggleStatus} />
        <Footer remainder = {count}/>
      </div>
    );
  }
}

export default App;
