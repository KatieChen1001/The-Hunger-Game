import React, { Component } from "react";

export default class Answer extends React.Component {
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
        <p>{this.props.data.content}</p>
      </button>
    );
  }
}
