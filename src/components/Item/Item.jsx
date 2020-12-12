import React, {Component} from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import {DeleteForever} from '@material-ui/icons';
import PropTypes from 'prop-types';

export default class Item extends Component {

  componentDidMount() {
    this.interval = setInterval(() => console.log('interval'), 1000);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  };

  render() {
    const {id, task, status, toggleStatus, onDelete, indexInList} = this.props;
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
  }
};

Item.defaultProps = {
  status: false,
  task: 'Сделать что-что',
  toggleStatus: () => {},
  onDelete: () => {}
};

Item.propTypes = {
  id: PropTypes.number,
  task: PropTypes.string,
  status: PropTypes.bool,
  toggleStatus: PropTypes.func,
  onDelete: PropTypes.func,
  indexInList: PropTypes.number
};
