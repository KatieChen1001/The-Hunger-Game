import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import NextBtn from "./NextBtn.js";
import BackBtn from "./BackBtn.js";
import "./animate.css";

class Prompt extends Component {
  constructor(props) {
    super(props);

    this.onNext = this.onNext.bind(this);
    this.switchSection = this.switchSection.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);

    this.unqualified = this.unqualified.bind(this);
    this.onPrevious = this.onPrevious.bind(this);

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

  unqualified() {
    let stageNum = this.state.stage + 2;
    this.setState({
      stage: stageNum
    });
    this.renderSwitch(stageNum);
  }

  onPrevious() {
    let stageNum = 0;
    this.setState({
      stage: stageNum
    });
    this.renderSwitch(stageNum);
  }

  // Back to App.js, trigger switch in App.js
  switchSection() {
    this.props.onClick();
  }

  renderSwitch(params) {
    switch (params) {
      case 1:
        return (
          <Reveal effect="fadeInUp">
            <div>
              <p>
                To determine your eligibility, please answer the following
                question: Have you used eleme or any other online food delivery
                services before?
              </p>
              <button onClick={this.onNext}>Yes</button>
              <button onClick={this.unqualified}>No</button>
            </div>
          </Reveal>
        );
      case 2:
        return (
          <Reveal effect="fadeInUp">
            <p>
              Alas! There is still food left for you! Before you are sent off to
              fight for it, please answer the following questions in order to
              build your tribute profile.
            </p>
            <div>
              <BackBtn onClick={this.onPrevious} />
              <NextBtn onClick={this.switchSection} />
            </div>
          </Reveal>
        );
      case 3:
        return (
          <Reveal effect="fadeInUp">
            <h1>
              You are UNQUALIFIED for the game{" "}
              <img
                src="http://localhost:3000/assets/sad.svg"
                width="30px"
                align="middle"
              />
            </h1>
            <p>Please go explore other capstone projects at the final show</p>
            <BackBtn onClick={this.onPrevious} />
            <span>Back to Home</span>
          </Reveal>
        );
      default:
        return (
          <Reveal effect="fadeInUp">
            <div>
              <h1>Welcome to The Hunger Game</h1>
              <p>
                You wake up from a food coma and realize that you are on Planet
                Starvation. The only way to sustain yourself on Planet
                Starvation is to participate in its annual Hunger Game.
              </p>
              <NextBtn onClick={this.onNext} />
            </div>
          </Reveal>
        );
    }
  }

  render() {
    return <div>{this.renderSwitch(this.state.stage)}</div>;
  }
}

export default Prompt;
