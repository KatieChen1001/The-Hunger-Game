import React, { Component } from "react";
import "./Answer.css";

export default class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onChoiceSelected(this.props.data.answerId);
  }

  render() {
    let button_class = this.props.selected ? "selected" : "unselected";

    return (
      <li className="listitem">
        <button
          onClick={this.onClick}
          type="button"
          id={this.props.data.answerId}
          className={button_class}
        >
          {this.props.data.graphicSrc ? (
            <img
              src={this.props.data.graphicSrc}
              width="140"
              height="140"
              alt=""
              class="imganswer"
            />
          ) : null}
          <p>{this.props.data.content}</p>
        </button>
      </li>
    );
  }
}
