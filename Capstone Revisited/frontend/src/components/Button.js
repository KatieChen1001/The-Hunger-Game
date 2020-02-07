import React, { Component } from "react";

export default class Button extends React.Component {
  render() {
    return (
      <div className="buttonContainer">
        <button>{this.props.buttonContent}</button>
      </div>
    );
  }
}
