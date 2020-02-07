import React, { Component } from "react";

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
      <div>
        <h1>{this.props.data.question.title}</h1>
        <input type="text" name={this.props.data.id} onChange={this.onChange} />
      </div>
    );
  }
}
