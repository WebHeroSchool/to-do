import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';

const Item = ({id, task, status, toggleStatus}) => {
    return (
      <li className={
          classnames({
              [styles.active]: true,
              [styles.done]: status
          })
      }>
          <Checkbox
            checked={status}
            onChange={() => toggleStatus(id)}
          />
          {task}
      </li>
    )
};

export default Item;
