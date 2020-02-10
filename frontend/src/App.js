import React, { Component } from 'react';
import './App.css';

import Router from './components/Router';
import { Menu, Layout } from 'antd';
import { Link, BrowserRouter } from 'react-router-dom';

const { Content } = Layout;

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout>
            <Menu
              mode="horizontal"
              style={{ padding: '1rem' }}>
              <Menu.Item>
                <Link to="/articles" style={{ color: 'black' }}>
                  首页
              </Link>
              </Menu.Item>
              <Menu.Item>测试</Menu.Item>
              <Menu.Item>测试</Menu.Item>
            </Menu>
            <Content>
              <Router />
            </Content>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
