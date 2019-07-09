import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super() 
    this.state = {
      input: '',
      animals: ['weasel','beaver','raccon','prairie dog','squirrel','Robert Downey Jr']
    }
  }
  handleInput(e) {
    this.setState({
      input: e.target.value
    })
  }
  render() {
    let displayAnimals = this.state.animals.map((el,i) => {
      if (el.includes(this.state.input) === true) {
      return <h2 key={i}>{el}</h2>
      }
    })
    return (
      <div className="App">
        <input onChange={e => this.handleInput(e)} type="text"/>
        {displayAnimals}
      </div>
    );
  }
}

export default App;
