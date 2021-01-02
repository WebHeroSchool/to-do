import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todo from '../Todo/Todo';
import AboutMe from '../AboutMe/AboutMe';
import Contacts from '../Contacts/Contacts';
import Header from '../Header/Header';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header/>
      <Route path='/' exact component={AboutMe}/>
      <Route path='/todo' component={Todo}/>
      <Route path='/contacts' component={Contacts}/>
    </Router>
  );
}

export default App;
