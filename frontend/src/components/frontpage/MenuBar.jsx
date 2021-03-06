import React from "react";
import { Link } from "react-router-dom";

import { Menu, Row, Col, Icon } from "antd";

const MenuBar = () => {
  return (
    <Row type="flex">
      <Col span={24}>
        <Menu theme="light" mode="horizontal" style={{ lineHeight: "64px" }}>
          <Menu.Item key="2">
            <Link to="/about">
              <Icon type="user" style={{ fontSize: "20px", margin: "10px" }} />
            </Link>
          </Menu.Item>
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="home" style={{ fontSize: "20px", margin: "10px" }} />
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="setting" style={{ fontSize: "20px", margin: "10px" }} />
            <Link to="/homepage"></Link>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default MenuBar;
