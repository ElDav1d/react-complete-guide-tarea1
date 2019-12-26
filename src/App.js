import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'sameForAll'
  };

  userNameInputHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  };

  render() {
    return (
      <div className="App">
        <h1>Hello world!</h1>
        <UserInput changed={this.userNameInputHandler} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
