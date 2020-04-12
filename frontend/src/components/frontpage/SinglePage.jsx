import React, { Component } from "react";
import { Typography } from "antd";
import "../../style/SinglePage.css";

const { Title, Text, Paragraph } = Typography;

class SinglePage extends Component {
  state = {
    articles: []
  };

  componentDidMount = async () => {
    const api_call = await fetch(`/articles/${this.props.match.params.id}`);
    const data = await api_call.json();
    this.setState({ articles: data });
  };

  render() {
    const article = this.state.articles;
    return (
      <div className="content">
        <Title>{article.title}</Title>
        <Text><div style={{ paddingBottom: "19px", textAlign: "right" }}>{article.createTime}</div></Text>
        <Paragraph>
          <div style={{ fontFamily: "Microsoft Yahei", fontSize: "16px", color: "#000000" }}
            dangerouslySetInnerHTML={{ __html: article.content }}>
          </div>
        </Paragraph>
      </div>
    );
  }
}

export default SinglePage;
