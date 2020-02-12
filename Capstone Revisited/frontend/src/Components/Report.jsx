import React, { Component } from "react";
import axios from "axios";

export default class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/hungerReport/" + this.props.match.params.id)
      .then(res => {
        console.log(res);
        this.setState({
          data: res.data
        });
      });
  }
  render() {
    return (
      <div>
        <h1>Your answer for question 1 is {this.state.data.question1}</h1>
        <h1>Your answer for question 2 is {this.state.data.question2}</h1>
      </div>
    );
  }
}
