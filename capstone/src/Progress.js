import React, { Component } from "react";
import "./Progress.css";
import ProgressBtn from "./ProgressBtn.js";
import { Link } from "react-router-dom";

class Progress extends Component {
  constructor(props) {
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.state = {
      active: ""
    };
  }

  buttonClicked(progressBtnName) {
    this.setState({
      active: progressBtnName
    });

    this.props.onClick(parseInt(progressBtnName));
  }

  render() {
    const numBtns = this.props.numOfSubsections;
    let progressBtns = [];
    for (var i = 0; i < numBtns; i++) {
      progressBtns.push(
        <ProgressBtn
          key={"progressBtnNum " + i}
          progressBtnName={i.toString()}
          onClick={this.buttonClicked}
          active={
            this.props.QuestionNum === i || this.state.active === i.toString()
          }
        />
      );
    }

    return (
      <div className="progressBar">
        <Link to={this.props.previousSection}>
          <p> {this.props.preName} </p>
        </Link>
        {progressBtns}
        <Link to={this.props.nextSection}>
          <p> Next </p>
        </Link>
      </div>
    );
  }
}

export default Progress;
