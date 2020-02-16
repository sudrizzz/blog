import React, { Component } from "react";
import AddArticle from "./AddArticle";
import ArticleManagement from "./ArticleManagement";
import ArticleRecyclement from "./ArticleRecyclement";

class Content extends Component {
  render() {
    const key = this.props.selKey;
    switch (key) {
      case "11":
        return <AddArticle />;
      case "12":
        return <ArticleManagement />;
      case "13":
        return <ArticleRecyclement />;
      default:
        return <AddArticle />;
    }
  }
}

export default Content;
