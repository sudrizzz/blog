import React, { Component } from 'react';
import './App.css';

import Router from './components/Router';

const server = "http://localhost:8080";

class App extends Component {

  constructor() {
    super();
    this.getUserName();
  }

  getUserName = async () => {
    const api_call = await fetch(`${server}/u/1`);
    const data = await api_call.json();
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
