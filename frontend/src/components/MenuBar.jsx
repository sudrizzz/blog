import React from 'react';
import { Link } from 'react-router-dom';

import { Menu, Row, Col } from 'antd';

const MenuBar = () => {
    return (
        <Row type="flex">
            <Col span={24}>
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">
                        <Link to="/">首页</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/about">关于</Link>
                        </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/login">登录</Link>
                        </Menu.Item>
                </Menu>
            </Col>
        </Row >
    )
}

export default MenuBar;