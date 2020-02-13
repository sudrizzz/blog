import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./fontpage/Login";
import MainPage from "./fontpage/MainPage";
import SinglePage from "./fontpage/SinglePage";
import Error from "./Error";
import MenuBar from "./fontpage/MenuBar";
import About from "./fontpage/About";
import HomePage from "./backstage/HomePage";

const Router = () => (
  <BrowserRouter>
    <MenuBar
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        padding: "0 20px",
        background: "#fff"
      }}
    />
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/login" component={Login} />
      <Route path="/articles/:id" component={SinglePage} />
      <Route path="/articles" component={MainPage} exact />
      <Route path="/about" component={About} exact />
      <Route path="/homepage" component={HomePage} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default Router;
