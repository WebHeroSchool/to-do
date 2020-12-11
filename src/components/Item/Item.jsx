import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import {DeleteForever} from '@material-ui/icons';

const Item = ({id, task, status, toggleStatus, onDelete, indexInList}) => {
  return (
    <li className={
      classnames({
        [styles.active]: true,
        [styles.done]: status
      })
    }>
      <Checkbox
        color='primary'
        checked={status}
        onChange={() => toggleStatus(indexInList)}
      />
      {task}
      <span className={styles.hide}>
        <DeleteForever
          className={styles.icon}
          onClick={() => onDelete(id)}
          style={{color: 'darkorange'}}/>
        </span>
    </li>
  )
};

Item.defaultProps = {
  status: false,
  task: 'Сделать что-что',
  toggleStatus: () => {},
  onDelete: () => {}
};

export default Item;
