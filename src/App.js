import React, { Component } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import OutstandingCount from './components/OutstandingCount';
import Todos from './components/Todos';
import './App.css';
import uuid from 'uuid/v4';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <AddTask />
        <OutstandingCount />
        <Todos />

      </div>
    );
  }
}

export default App;
