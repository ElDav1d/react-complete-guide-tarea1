import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <UserInput />
        <UserOutput />
      </div>
    );
  }
}

export default App;
