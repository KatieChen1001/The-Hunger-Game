import React, { Component } from "react";
import "./AnswerGraphics.css";

export default class AnswerGraphics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnSelected: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({ btnSelected: !this.state.btnSelected });
    this.props.onChoiceSelected(this.props.data.content);
  }
  render() {
    let btn_class = this.state.btnSelected ? "selected" : "unselected";
    return (
      <button
        onClick={this.onClick}
        type="button"
        id={this.props.data.answerId}
        className={btn_class}
      >
        <img src={this.props.data.graphicSrc} width="100px" height="100%" />
        <p>{this.props.data.content}</p>
      </button>
    );
  }
}
