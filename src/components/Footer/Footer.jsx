import React from 'react';
import style from './Footer.module.css';

const Footer = ({remainder}) => (
  <p className={style.text}>Tasks left: {remainder}</p>);

export default Footer;
