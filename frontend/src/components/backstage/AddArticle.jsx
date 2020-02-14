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

  submit = async e => {
    e.preventDefault();
    let data = {
      title: this.state.title,
      content: this.state.content
    };
    const res = await fetch(`/articles/save`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        auth: "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    if (json.status !== 403) {
      this.props.history.push("/success");
    } else {
      message.error("用户未登录或信息已更改，请重新登录！");
    }
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
          paddingTop: 32
        }}
      >
        <Form onSubmit={this.submit}>
          <Input
            size="large"
            placeholder="标题"
            onChange={this.handleTitleChange}
          />
          <div className="editor" style={{ paddingTop: 32, paddingBottom: 32 }}>
            <TextArea
              placeholder="正文"
              onChange={this.handleContentChange}
              style={{ height: 400 }}
            />
          </div>
          <Button type="primary" size="large" htmlType="submit">
            保存
          </Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(AddArticle);
