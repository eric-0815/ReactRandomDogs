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
      </div>
    );
  }
}

export default App;
