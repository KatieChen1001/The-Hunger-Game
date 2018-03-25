import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";

class RoundTwo extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick();
  }
  render() {
    return (
      <div onClick={this.onClick}>
        <h1>Round II Run Chicken Run</h1>
        <p>
          Instruction: In your answer for your tribute profile, you went with
          store [name], which is [distance] km away. Buckle up, you are going
          speeding. (← & → to avoid pedestrians and cars)
        </p>
      </div>
    );
  }
}

export default RoundTwo;
