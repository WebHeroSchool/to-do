import React from 'react';
import style from './Footer.module.css';
import PropTypes from 'prop-types';

const Footer = ({remainder}) => <p className={style.text}>Tasks left: {remainder}</p>

Footer.defaultProps = {
  remainder: 0
};

Footer.propTypes = {
  remainder: PropTypes.number
};

export default Footer;
