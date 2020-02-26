import React, { Component } from "react";
import "./InputQuestion.css";
import "../questionblock.css";

export default class InputQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    let nam = e.target.name;
    let val = e.target.value;
    this.props.onInputChange({ nam, val });
  }

  render() {
    return (
      <div class="questionblock">
        <h1 class="questionnum">QUESTION {this.props.data.id}</h1>
        <h2 class="questioncontent">{this.props.data.question.title}</h2>
        <input
          type="text"
          class="inputfield w-input"
          maxlength="25"
          name={this.props.data.id}
          onChange={this.onChange}
          data-name="Field"
          placeholder="An Everdeen or a Mellark?"
          id="field"
          required=""
        />
      </div>
    );
  }
}
