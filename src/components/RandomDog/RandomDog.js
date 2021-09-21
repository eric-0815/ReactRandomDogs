import React, { Component } from "react";
import axios from "axios";
class RandomDog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }

  requestDog() {
    let _this = this;
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
      _this.requestDog();
    }
    return content;
  }

  verifyDogResource(url) {
    var url_split = url.split(".");
    var surrfix = url_split[url_split.length - 1].toLowerCase();
    let is_support = ["jpeg", "jpg", "png", "gif", "mp4"].includes(surrfix);
    return is_support;
  }

  componentDidMount() {
    const _this = this;
    axios.get("https://random.dog/woof.json").then(function (response) {
      var isSupport = _this.verifyDogResource(response.data["url"]);
      if (!isSupport) {
        axios
          .get("https://random.dog/woof.json")
          .then(function (response) {
            _this.setState({
              url: response.data["url"],
            });
          });
      } else {
        _this.setState({
          url: response.data["url"],
        });
      }
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
    } 
    return <span>{content}</span>;
  }
}

export default RandomDog;
