import React from 'react';
import css from './Footer.module.css';

const Footer = ({remainder}) => (
  <p className={css.text}>Tasks left: {remainder}</p>);

export default Footer;
