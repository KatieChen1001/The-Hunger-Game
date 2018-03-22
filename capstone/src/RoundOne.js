import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import NextBtn from "./NextBtn.js";
import ImgQuestion from "./ImgQuestion.js";

class RoundOne extends Component {
  constructor(props) {
    super(props);

    this.onNext = this.onNext.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);

    this.state = {
      stage: 0
    };
  }

  onNext() {
    let stageNum = this.state.stage + 1;
    this.setState({
      stage: stageNum
    });
    this.renderSwitch(stageNum);
  }

  renderSwitch(params) {
    switch (params) {
      case 1:
        return (
          <div>
            <h1>Grab</h1>
            <div className="iconWrapper">
              <ImgQuestion
                label="burger"
                size="small"
                onClick={this.ninjaChange}
              />
            </div>
          </div>
        );
      default:
        return (
          <div>
            <h1>Round I Grab and Pack</h1>
            <p>
              Instructions: The Hunger Game begins as all candidates dash
              towards the food stash for supply. Grab your favorite food and
              pack it well! This is your livelihood and your weapon! Choose
              wisely!
            </p>
            <NextBtn onClick={this.onNext} />
          </div>
        );
    }
  }

  render() {
    return <div>{this.renderSwitch(this.state.stage)}</div>;
  }
}

export default RoundOne;
