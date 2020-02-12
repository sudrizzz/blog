import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './Login';
import MainPage from './MainPage';
import SinglePage from './SinglePage';
import Error from './Error';
import MenuBar from './MenuBar';
import About from './About';

const Router = () => (
    <BrowserRouter>
        <MenuBar style={{ position: 'fixed', zIndex: 1, width: '100%', padding: '0 20px', background: "#fff" }} />
        <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path="/login" component={Login} />
            <Route path="/articles/:id" component={SinglePage} />
            <Route path="/articles" component={MainPage} exact />
            <Route path="/about" component={About} exact />
            <Route component={Error} />
        </Switch>
    </BrowserRouter>
);

export default Router;