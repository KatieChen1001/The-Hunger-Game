import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import NextBtn from "./NextBtn.js";
import "./animate.css";

class Prompt extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.switchSection = this.switchSection.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);

    this.state = {
      stage: 0
    };
  }

  onClick() {
    let stageNum = this.state.stage + 1;
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
              <button onClick={this.onClick}>Yes</button>
              <button>No</button>
            </div>
          </Reveal>
        );
      case 2:
        return (
          <Reveal effect="fadeInUp">
            <p>
              Alas! There is still food left for you! You have to complete three
              rounds of tasks to receive your aliments.
            </p>
            <NextBtn onClick={this.onClick} />
          </Reveal>
        );
      case 3:
        return (
          <Reveal effect="fadeInUp">
            <p>
              Before you are sent off to fight for food, please answer the
              following questions in order to build your tribute profile.
            </p>
            <NextBtn onClick={this.switchSection} />
          </Reveal>
        );
      default:
        return (
          <Reveal effect="fadeInUp">
            <div>
              <h1>Welcome to The Hunger Game</h1>
              <p>
                {" "}
                You wake up from a food coma and realize that you are on Planet
                Starvation. The only way to sustain yourself on Planet
                Starvation is to participate in its annual Hunger Game.
              </p>
              <NextBtn onClick={this.onClick} />
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
