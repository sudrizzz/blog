import React, { Component } from "react";
import { Typography, Pagination, Skeleton, Divider } from "antd";
import { Link } from "react-router-dom";
import "../../style/MainPage.css";

const { Title, Text, Paragraph } = Typography;

class MainPage extends Component {
  state = {
    data: [],
    current: 1
  };

  componentDidMount = async () => {
    const req = await fetch(`/articles/counts`);
    const res = await req.json();
    const counts = res.counts;
    const json = localStorage.getItem("data");
    if (
      json != null &&
      json.total === counts &&
      JSON.parse(json).current === this.state.current
    ) {
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

  onChange = async page => {
    const api_call = await fetch(`/articles/?pageNo=${page}`);
    const data = await api_call.json();
    this.setState({
      current: page,
      data
    });
  };

  render() {
    const { data, current } = this.state;
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
            data.records.map(article => {
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
                  <Text><div style={{ paddingBottom: "19px", textAlign: "right" }}>{article.createTime}</div></Text>
                  <Paragraph ellipsis={{ rows: 3 }}>
                    <div
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    ></div>
                  </Paragraph>
                  <Divider />
                </div>
              );
            })
          )}
        <div>
          <Pagination
            current={current}
            total={data.total}
            onChange={this.onChange}
            style={{ textAlign: "center", paddingBottom: "1rem" }}
          />
        </div>
      </div>
    );
  }
}

export default MainPage;
