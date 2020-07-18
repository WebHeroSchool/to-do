import React from 'react';
import css from './InputItem.module.css';
import Button from '@material-ui/core/Button';

const InputItem = () => (
  <div className= {css.wrap}>
    <input
      placeholder="You can add new task here"
      className = {css.main}
    />
    <Button variant="contained" color="primary" href="#contained-buttons">
      Add
    </Button>
  </div>
);


export default InputItem;
