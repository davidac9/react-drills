import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      arr: ['w ','e ','a ','s ','e ','l ','s ']
    }
  }
  render() {
    let display = this.state.arr.map((el,i) => {
      return <h2 key={i}>{el}</h2>
    })
    return (
      <div className="App">
        {display}
      </div>
    );
  }
}

export default App;
