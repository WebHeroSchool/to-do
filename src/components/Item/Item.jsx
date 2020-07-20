import React from 'react';
import classnames from 'classnames';
import css from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';

const Item = ({task, status, onClick}) => (
  <li className={
    classnames({
      [css.active]: true,
      [css.done]: status,})
  }>
    <Checkbox onClick={() => onClick(status)} />
    {task}
  </li>
);

export default Item;
