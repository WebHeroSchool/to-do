import React from 'react';
import css from './InputItem.module.css';

const InputItem = () => (
  <input
    placeholder="You can add new task here"
    className = {css.main}
  />);

export default InputItem;
