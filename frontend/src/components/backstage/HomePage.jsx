import React, { Component } from "react";
import { Menu, Icon, Layout } from "antd";
import Forbidden from "../status/Forbidden";
import Content from "./Content";

const { Sider } = Layout;
const { SubMenu } = Menu;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.checkToken();
    this.state = {
      selKey: "0"
    };
  }

  checkToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`/checkToken`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          auth: "Bearer " + token
        }
      }).then(res => {
        if (res.status === 403) {
          localStorage.removeItem("token");
          this.props.history.push("/login");
        }
      });
    }
  };

  handleSelKey = event => {
    this.setState({ selKey: event.key });
  };

  render() {
    return (
      <Layout style={{ background: "#fff" }}>
        <div className="sideBar">
          {localStorage.getItem("token") !== null ? (
            <Sider trigger={null} collapsible style={{ float: "left" }}>
              <Menu
                mode="inline"
                defaultOpenKeys={["1"]}
                defaultSelectedKeys={["11"]}
              >
                <SubMenu
                  key="1"
                  title={
                    <span>
                      <Icon type="file-text" />
                      <span>文章管理&nbsp;&nbsp;</span>
                    </span>
                  }
                >
                  <Menu.Item key="11" onClick={this.handleSelKey}>
                    新增&nbsp;&nbsp;
                  </Menu.Item>
                  <Menu.Item key="12" onClick={this.handleSelKey}>
                    总览&nbsp;&nbsp;
                  </Menu.Item>
                  <Menu.Item key="13" onClick={this.handleSelKey}>
                    回收站&nbsp;&nbsp;
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="2"
                  title={
                    <span>
                      <Icon type="setting" />
                      <span>账户设置&nbsp;&nbsp;</span>
                    </span>
                  }
                >
                  <Menu.Item key="21" onClick={this.handleSelKey}>
                    信息更新&nbsp;&nbsp;
                  </Menu.Item>
                  <Menu.Item key="22" onClick={this.handleSelKey}>
                    修改密码&nbsp;&nbsp;
                  </Menu.Item>
                </SubMenu>

                <SubMenu
                  key="3"
                  title={
                    <span>
                      <Icon type="tags" />
                      <span>分类维护&nbsp;&nbsp;</span>
                    </span>
                  }
                >
                  <Menu.Item key="31" onClick={this.handleSelKey}>
                    测试&nbsp;&nbsp;
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
          ) : (
            <Forbidden />
          )}
        </div>
        <Content selKey={this.state.selKey} />
      </Layout>
    );
  }
}

export default HomePage;
