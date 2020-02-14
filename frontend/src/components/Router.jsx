import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./frontpage/Login";
import MainPage from "./frontpage/MainPage";
import SinglePage from "./frontpage/SinglePage";
import NotFound from "./status/NotFound";
import MenuBar from "./frontpage/MenuBar";
import About from "./frontpage/About";
import HomePage from "./backstage/HomePage";
import Success from "./status/Success";

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
      <Route path="/about" component={About} />
      <Route path="/homepage" component={HomePage} />
      <Route path="/success" component={Success} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
