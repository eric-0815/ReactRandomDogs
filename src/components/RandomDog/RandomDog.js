import React, { Component } from "react";
import axios from "axios";
class RandomDog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }
  componentDidMount() {
    const _this = this;
    axios
      .get("https://random.dog/woof.json")
      .then(function (response) {
        // handle success
        console.log(response.data["url"]);
        _this.setState({
          url: response.data["url"],
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
    let content;
    var url = this.state.url;
    var url_split = url.split(".");
    var surrfix = url_split[url_split.length - 1];
    // FORMATS
    if (
      surrfix.toLowerCase() == "jpeg" ||
      surrfix.toLowerCase() == "jpg" ||
      surrfix.toLowerCase() == "png" ||
      surrfix.toLowerCase() == "gif"
    ) {
      content = <img src={url} width="250" height="230"></img>;
    } else if (surrfix == "mp4") {
      content = (
        <video width="250" height="230" controls>
          <source src={url} type="video/mp4" type="video/mp4"></source>
        </video>
      );
    } else {
      content = (
        <img
          src={"https://random.dog/bfb9e165-c643-4993-9b3a-7e73571672a6.jpg"}
          width="250"
          height="230"
        ></img>
      );
      surrfix = "jpg";
    }

    return <span>{content}</span>;
  }
}

export default RandomDog;
