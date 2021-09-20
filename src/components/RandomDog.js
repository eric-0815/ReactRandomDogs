import React, { Component } from 'react';
import axios from 'axios';

class RandomDog extends React.Component {
	constructor(props){
    super(props);
    this.state={
      url:"",
    }
  }
  componentDidMount(){
    const _this=this;
    axios
    .get("https://random.dog/woof.json")
    .then(function (response) {
      // handle success
      console.log(response.data["url"]);
      _this.setState({
        url:response.data["url"]
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  }

  render() {
      return (
        <h1>{this.state.url}</h1>
      )  
  }
}

export default RandomDog;
