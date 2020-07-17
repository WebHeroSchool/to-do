import React from 'react';
import classnames from 'classnames';
import css from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';

const Item = ({task, status}) => (
  <li className={
    classnames({
      [css.active]: true,
      [css.done]: status,
    })
  }>
    <Checkbox inputProps={{ 'aria-label': 'primary checkbox' }}
    />
    {task}</li>
);

  export default Item;