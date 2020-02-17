import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Input, Form, Button, message } from "antd";

const { TextArea } = Input;

class AddArticle extends Component {
  state = {
    title: "",
    content: ""
  };

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleContentChange = event => {
    this.setState({ content: event.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      content: this.state.content
    };
    fetch(`/articles/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        auth: "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify(data)
    }).then(res => {
      if (res.status === 200) {
        message.success("保存成功");
        this.setState({
          title: "",
          content: ""
        });
      } else {
        message.error("保存失败");
      }
    });
  };

  render() {
    return (
      <div
        className="container"
        style={{
          width: 800,
          height: "100%",
          margin: "auto",
          paddingRight: 200,
          paddingTop: 24
        }}
      >
        <Form onSubmit={this.onSubmit}>
          <Form.Item>
            <Input
              size="large"
              placeholder="标题"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
          </Form.Item>
          <Form.Item>
            <TextArea
              placeholder="正文"
              value={this.state.content}
              onChange={this.handleContentChange}
              style={{ height: 400 }}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              保存
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default withRouter(AddArticle);
