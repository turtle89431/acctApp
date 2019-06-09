import ReactDOM from "react-dom";
import React from "react";
import App from "./app.js";
var mountNode = document.getElementById("app");
export default class main {
  constructor(ipc) {
    this.state = {};
    this.setState = this.setState.bind(this);
    this.run = this.run.bind(this);
    this.ipc = ipc ? ipc : null;
  }
  setState(newVal) {
    let keys = Object.keys(newVal);
    let tmp = this.state;
    keys.forEach(x => (tmp[x] = newVal[x]));
    console.log(tmp);
    this.state = tmp;
    this.run(); 
  }
  run() {
    ReactDOM.render(<App window={window} state={this.state} ipc={this.ipc} />, mountNode);
  }
}
