import React, { Component } from "react";
import Button from "Button";

export default class Question extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      this.requireInput = false;
    }
  }
  render() {
    const requireInput = this.state.requireInput;
    let option;
    if (requireInput) {
      option = <input type="text" />;
    }

    return (
      <div className="questionContainer">
        <span className="questionHeader">
          Question {this.props.questionNum}
        </span>
        <div className="spacer"></div>
        <h1>{this.props.questionContent}</h1>

        {this.props.requireInput? (
          // If question requires user input, return an input box
          <input type = "text"/>
        ): (
          // If question does not require user input, return an option variable.
          // Option variable will either render image options or text options. 
        )}
      </div>
    );
  }
}
