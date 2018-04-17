import React, { Component } from "react";
import Progress from "./Progress.js";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Progress />
      </div>
    );
  }
}

export default App;
