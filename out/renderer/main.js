//start react app that starts in gui/app.js
/*
        Main.setState({name:"state updated"}) - example how to update state from outside react
        Main.state - view state outside react
      */
const ipc = require("./ipc");

window.Main = new window.MainClass(new ipc());
Main.run();
 