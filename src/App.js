import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'


import BurgerBuilder from './components/Burgerbuilder/BurgerBuilder';



class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <BurgerBuilder/>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;