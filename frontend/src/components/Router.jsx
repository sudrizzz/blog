import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './Login';
import MainPage from './MainPage';
import Error from './Error';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={MainPage} exact/>
            <Route path="/login" component={Login} exact/>
            {/* <Route path="/u/:id" component={MainPage} /> */}
            <Route component={Error}/>
        </Switch>
    </BrowserRouter>
);

export default Router;