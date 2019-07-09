import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginButton from "./components/LoginButton"

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: '',
      pass: ''
    }

  }
  handleUser(e) {
    this.setState({
      user: e.target.value
    })
  }
  handlePass(e) {
    this.setState({
      pass: e.target.value
    })
  }
  alerter = () => {
    alert(`Username: ${this.state.user} Password: ${this.state.pass}`)
  }
  render() {
    return (
      <div className="App">
        <input onChange={e => this.handleUser(e)} type="text"/>
        <input onChange={e => this.handlePass(e)} type="text"/>
        {/* <button onClick={this.alerter()}>Login</button> */}
        <LoginButton al={this.alerter}/>
      </div>
    );
  }
}

export default App;
