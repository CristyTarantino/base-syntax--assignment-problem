import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import './Components/UserOutput';
import UserOutput from "./Components/UserOutput";
import UserInput from "./Components/UserInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernames: [
        {id: 0, username: 'Mark'},
        {id: 1, username: 'Cristina'},
        {id: 2, username: 'Francesco'}
      ]
    }
  }
  
  setNameHandler = (id, value) => {
    let newUsernames = this.state.usernames.map(item => {
      if (item.id === id) {
        item.username = value;
      }
      
      return item;
    });
    
    this.setState({
      usernames: newUsernames
    });
  };
  
  render() {
    const formStyle = {
      position: 'relative',
      zIndex: '1',
      padding: '1rem',
      width: '980px'
    };
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>My First React Assignment</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div style={formStyle} className="App-content">
          <UserInput handleChange={this.setNameHandler} username={this.state.usernames[0].username} id={this.state.usernames[0].id}/>
          <UserOutput username={this.state.usernames[0].username}/>
    
          <UserInput handleChange={this.setNameHandler} username={this.state.usernames[1].username} id={this.state.usernames[1].id}/>
          <UserOutput username={this.state.usernames[1].username}/>
    
          <UserInput handleChange={this.setNameHandler} username={this.state.usernames[2].username} id={this.state.usernames[2].id}/>
          <UserOutput username={this.state.usernames[2].username}/>
        </div>
      </div>
    );
  }
}

export default App;
