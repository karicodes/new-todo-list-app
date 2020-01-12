import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';
import uuid from 'uuid/v4';

class App extends Component {
  render() {
    return (
      <div className="container" className="App">
        <Todos />

      </div>
    );
  }
}

export default App;
