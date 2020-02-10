import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './Login';
import MainPage from './MainPage';
import SinglePage from './SinglePage';
import Error from './Error';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={MainPage} exact/>
            <Route path="/login" component={Login} />
            <Route path="/articles/:id" component={SinglePage} />
            <Route path="/articles" component={MainPage} exact />
            <Route component={Error}/>
        </Switch>
    </BrowserRouter>
);

export default Router;