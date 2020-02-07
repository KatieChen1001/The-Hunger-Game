import React, { Component } from "react";

export default class AnswerGraphics extends React.Component {
  render() {
    return (
      <button>
        <img src={this.props.graphicSrc} width="100px" height="100%" />
      </button>
    );
  }
}
