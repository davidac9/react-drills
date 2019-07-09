import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./components/Image"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image james={`https://raw.githubusercontent.com/DevMountain/react-drills/assets/5.png`} />
      </div>
    );
  }
}

export default App;
