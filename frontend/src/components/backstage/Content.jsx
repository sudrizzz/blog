import React, { Component } from "react";
import AddArticle from "./AddArticle";

class Content extends Component {
  render() {
    const key = this.props.selKey;
    switch (key) {
      case "11":
        return <AddArticle />;
      default:
        return <AddArticle />;
    }
  }
}

export default Content;
