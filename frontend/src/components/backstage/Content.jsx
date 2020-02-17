import React, { Component } from "react";
import AddArticle from "./ArticleManagement/AddArticle";
import ArticleManagement from "./ArticleManagement/ArticleManagement";
import ArticleRecyclement from "./ArticleManagement/ArticleRecyclement";
import PasswordUpdate from "./UserManagement/PasswordUpdate";

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
      case "21":
        return <ArticleRecyclement />;
      case "22":
        return <PasswordUpdate />;
      case "31":
        return <ArticleRecyclement />;
      default:
        return <AddArticle />;
    }
  }
}

export default Content;
