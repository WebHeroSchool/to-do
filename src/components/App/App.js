import React, {Component} from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import css from './App.module.css';

class App extends Component {
  state = {
    tasksData: [
      {
        value: 'Сверстать сайт с помощью HTML5 и CSS3',
        isDone: true,
      },
      {
        value: 'Написать игру на JS',
        isDone: true,
      },
      {
        value: 'Создать to-do приложение используюя React',
        isDone: false,
      },
    ],
  };

  constructor(props) {
    super(props);

    this.markAsCompleted = this.markAsCompleted.bind(this);
  }

  markAsCompleted(statusFromItem) {
    // eslint-disable-next-line no-console
    console.log(statusFromItem);
  }


  render() {
    const {tasksData} = this.state;
    return (
      <div className = {css.wrap}>
        <h1 className = {css.title} >My to-do list </h1>
        <InputItem/>
        <ItemList tasksData = {tasksData} onClick = {this.markAsCompleted} />
        <Footer remainder = '1'/>
      </div>
    );
  }
};

export default App;
