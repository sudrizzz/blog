import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Layout } from 'antd';

import Login from './Login';
import MainPage from './MainPage';
import SinglePage from './SinglePage';
import Error from './Error';
import MenuBar from './MenuBar';
import About from './About';

const { Header, Content } = Layout;

const Router = () => (
    <BrowserRouter>
        <Layout style={{height: '100%'}}>
            <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0 20px', background: "#fff"}}>
                <MenuBar />
            </Header>
            <Content style={{ background: '#fff', minHeight: 500, marginTop: '64px' }}>
                <Switch>
                    <Route path="/" component={MainPage} exact />
                    <Route path="/login" component={Login} />
                    <Route path="/articles/:id" component={SinglePage} />
                    <Route path="/articles" component={MainPage} exact />
                    <Route path="/about" component={About} exact />
                    <Route component={Error} />
                </Switch>
            </Content>
        </Layout>
    </BrowserRouter>
);

export default Router;