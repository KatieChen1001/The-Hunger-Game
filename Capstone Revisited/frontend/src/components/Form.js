import React, { Component } from "react";
import Question from "./Question";
import axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    // const profile = {
    //   alias: this.state.alias,
    //   frequency: this.state.frequency
    // };
    //
    // console.log(profile);
    //
    // axios
    //   .post("http://localhost:3000/", profile)
    //   .then(res => console.log(res.data));
    //
    // window.location = "/";
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <Question />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
