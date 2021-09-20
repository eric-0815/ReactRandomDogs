import React, { Component } from 'react';
import './App.css';
import RandomDog from './components/RandomDog/RandomDog';
import RandomRender from './components/RandomDog/RandomRender';
class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="container">
        <RandomRender/>
      </div>
    );
  }
}

export default App;
