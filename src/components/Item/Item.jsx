import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';

const Item = ({task, status, toggleStatus}) => (
  <li className={
    classnames({
      [styles.active]: true,
      [styles.done]: status
    })
  }>
    <Checkbox onClick={() => toggleStatus(status)} />
    {task}
  </li>
);

export default Item;
