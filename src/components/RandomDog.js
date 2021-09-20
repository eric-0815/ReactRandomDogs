import React, { Component } from "react";
import axios from "axios";
class RandomDog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
    this.pic = false;
    this.video = false;
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
    surrfix = surrfix.toLowerCase();
    if (surrfix == "jpeg" || surrfix == "jpg" || surrfix == "png") {
      this.pic = true;
      content = <img src={url} width="190" height="150"></img>;
    }

    return <div><div>{content}</div><div>{surrfix}</div></div>;
  }
  /*
      <div>
        <div>
          {this.pic == true ? (
            <img src={url} width="190" height="150"></img>
          ) : (
            "null"
          )}
        </div>
        {url}
      </div>
      */
}
//<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
//
export default RandomDog;
