import React from 'react';
import classnames from 'classnames';
import css from './Item.module.css';

const Item = ({task, status}) => (
  <li className={
    classnames({
      [css.active]: true,
      [css.done]: status,
    })
  }>
    {task}</li>
);

export default Item;
