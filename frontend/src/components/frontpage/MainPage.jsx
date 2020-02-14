import React, { Component } from "react";
import { Typography, Pagination, Skeleton, Divider } from "antd";
import { Link } from "react-router-dom";
import "../../style/MainPage.css";

const { Title, Paragraph } = Typography;

class MainPage extends Component {
  state = {
    data: []
  };

  componentDidMount = async () => {
    const json = localStorage.getItem("data");
    if (json != null) {
      const data = JSON.parse(json);
      this.setState({ data: data });
    } else {
      const api_call = await fetch(`/articles/`);
      const data = await api_call.json();
      this.setState({ data: data });
    }
  };

  componentDidUpdate = () => {
    const data = JSON.stringify(this.state.data);
    localStorage.setItem("data", data);
  };

  render() {
    const articles = this.state.data.records;
    const total = this.state.data.total;
    return (
      <div
        style={{
          maxWidth: 800,
          textAlign: "left",
          margin: "auto",
          padding: "1rem"
        }}
      >
        {this.state.data.length === 0 ? (
          <Skeleton active />
        ) : (
          articles.map(article => {
            return (
              <div key={article.articleId} className="article">
                <Title>
                  <Link
                    to={`articles/${article.articleId}`}
                    style={{ color: "black" }}
                  >
                    {article.title}
                  </Link>
                </Title>
                <Paragraph ellipsis={{ rows: 3 }}>{article.content}</Paragraph>
                <Divider />
              </div>
            );
          })
        )}
        <div>
          <Pagination
            defaultCurrent={1}
            total={total}
            style={{ textAlign: "center", paddingBottom: "1rem" }}
          />
        </div>
      </div>
    );
  }
}

export default MainPage;
