import React, {Component} from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends Component {

  componentDidMount() {
    console.log('1 - Компонент смонтирован на страницу');
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState !== this.state) {
      console.log('2 - У компонента обновилось состояние');
    }
  };

  taskId = 4;

  state = {
    items: [
      { value: 'Сверстать сайт с помощью HTML5 и CSS3', isDone: true, id: 1 },
      { value: 'Написать игру на JS', isDone: true, id: 2 },
      { value: 'Создать to-do приложение используюя React', isDone: false, id: 3 },
    ]
  };

  addItem = (label) => {

    const newItem = {
      value: label,
      isDone: false,
      id: this.taskId++
    };

    this.setState(({items}) => {
      const updatedItems = [...items, newItem];
      return {items: updatedItems};
    });
  };

  deleteItem = (itemId) => {
    const {items} = this.state;
    const remainedItems = items.filter(item => item.id !== itemId);

    this.setState({
      items: remainedItems
    })
  };

  toggleStatus = (taskIndex) => {

    this.setState(({items}) => {
      const oldItem = items[taskIndex];
      const newItem = {...oldItem, isDone: !oldItem.isDone};

      const newItems = [
        ...items.slice(0, taskIndex),
        newItem,
        ...items.slice(taskIndex + 1)
      ];

      return {
        items: newItems
      };

    });
  };

  render() {
    const {items} = this.state;
    const count = items.length
    return (
      <div className = {styles.wrap}>
        <h1 className = {styles.title} >My to-do list</h1>
        <InputItem addItem={this.addItem}/>
        <ItemList
          items={items}
          toggleStatus={this.toggleStatus}
          onDelete={this.deleteItem}
        />
        <Footer remainder = {count}/>
      </div>
    );
  }
}

export default App;
