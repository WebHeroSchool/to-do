import React from 'react';
import style from './InputItem.module.css';
import Button from '@material-ui/core/Button';

const InputItem = () => (
  <div className= {style.wrap}>
    <input
      placeholder="You can add new task here"
      className = {style.main}
    />
    <Button variant="contained" color="primary" href="#contained-buttons">
      Add
    </Button>
  </div>
);


export default InputItem;
