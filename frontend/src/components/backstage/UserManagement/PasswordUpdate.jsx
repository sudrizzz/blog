import React, { Component } from "react";
import { Input, Form, Button, message, Icon } from "antd";
import md5 from "md5";

class NormalLoginForm extends Component {
  state = {
    original: "",
    password: "",
    repeat: ""
  };

  handleOriginalChange = event => {
    this.setState({ original: md5(event.target.value) });
  };

  handlePasswordChange = event => {
    this.setState({ password: md5(event.target.value) });
  };

  handleRepeatChange = event => {
    this.setState({ repeat: md5(event.target.value) });
  };

  onSubmit = async e => {
    e.preventDefault();
    if (this.state.password !== this.state.repeat) {
      return message.error("两次输入的新密码不一致！");
    } else if (this.state.original === this.state.password) {
      return message.error("新密码与旧密码不能相同！");
    }
    const data = {
      original: this.state.original,
      password: this.state.password
    };
    const req = await fetch(`/user/1`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        auth: "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify(data)
    });
    const res = await req.json();
    if (res.code === "200") {
      message.success("保存成功");
      this.setState({
        original: "",
        password: "",
        repeat: ""
      });
    } else {
      message.error("保存失败");
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div
        className="container"
        style={{
          width: 560,
          height: "100%",
          margin: "auto",
          paddingRight: 200,
          paddingTop: 24
        }}
      >
        <Form
          onSubmit={this.onSubmit}
          className="login-form"
          style={{ marginTop: 48 }}
        >
          <Form.Item>
            <span style={{ float: "left" }}>用户名：admin</span>
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("original", {
              rules: [{ required: true, message: "请输入原密码！" }]
            })(
              <Input.Password
                size="large"
                placeholder="原密码"
                visibilityToggle={false}
                onChange={this.handleOriginalChange}
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "请输入新密码！" }]
            })(
              <Input.Password
                size="large"
                placeholder="新密码"
                visibilityToggle={false}
                onChange={this.handlePasswordChange}
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("repeat", {
              rules: [{ required: true, message: "请再次输入新密码！" }]
            })(
              <Input.Password
                size="large"
                placeholder="请再次输入新密码"
                visibilityToggle={false}
                onChange={this.handleRepeatChange}
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
              />
            )}
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

const PasswordUpdate = Form.create({ name: "password_update" })(
  NormalLoginForm
);

export default PasswordUpdate;
