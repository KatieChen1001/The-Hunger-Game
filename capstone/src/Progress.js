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
    // const numberOfProgressBtns = [0, 1, 2, 3, 4, 5, 6]
    //
    // const progressBtns = numberOfProgressBtns.map((number, i)=>(
    //   <ProgressBtn progressBtnName = {number}.toString() onClick ={this.buttonClicked} active = {this.props.QuestionNum === {number} || this.state.active === {number}.toString()} />
    // )

    // THIS WILL COME FROM PROPS!!!!!!!
    const numBtns = 5;

    return (
      <div className="progressBar">
        <Link to={this.props.previousSection}>
          <p> Pre </p>
        </Link>

        <ProgressBtn
          progressBtnName="0"
          onClick={this.buttonClicked}
          active={this.props.QuestionNum === 0 || this.state.active === "0"}
        />
        <ProgressBtn
          progressBtnName="1"
          onClick={this.buttonClicked}
          active={this.props.QuestionNum === 1 || this.state.active === "1"}
        />
        <ProgressBtn
          progressBtnName="2"
          onClick={this.buttonClicked}
          active={this.props.QuestionNum === 2 || this.state.active === "2"}
        />
        <ProgressBtn
          progressBtnName="3"
          onClick={this.buttonClicked}
          active={this.props.QuestionNum === 3 || this.state.active === "3"}
        />
        <ProgressBtn
          progressBtnName="4"
          onClick={this.buttonClicked}
          active={this.props.QuestionNum === 4 || this.state.active === "4"}
        />

        <Link to={this.props.nextSection}>
          <p> Next </p>
        </Link>
      </div>
    );
  }
}

export default Progress;
