import React, { Component } from 'react';
import './App.css';
import RandomDog from './components/RandomDog';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="container">
        <RandomDog />
        <RandomDog />
        <RandomDog />
        <RandomDog />
        <RandomDog />
        <RandomDog />
        <RandomDog />
        <RandomDog />
      </div>
    );
  }
}

export default App;
