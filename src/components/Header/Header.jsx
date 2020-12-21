import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <Link to='/'><span className={styles.text}>About Me</span></Link>
      <Link to='/todo'><span className={styles.text}>ToDo</span></Link>
      <Link to='/contacts'><span className={styles.text}>Contacts</span></Link>
    </nav>
  );
};

export default Header;
