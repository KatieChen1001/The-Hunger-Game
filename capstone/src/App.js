import React, { Component } from "react";
import "./App.css";
import Prompt from "./Prompt.js";
import Questionnaire from "./Questionnaire.js";
import NextBtn from "./NextBtn.js";
import RoundOne from "./RoundOne.js";
import RoundTwo from "./RoundTwo.js";
import Reveal from "react-reveal/Reveal";

class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
    this.onClickPassState = this.onClickPassState.bind(this);
    this.state = {
      appStage: 2,
      questionnaire: {
        stage: "",
        foodieAlias: "",
        ninja: "",
        orderFrequency: "",
        waimai: "",
        emoji: "",
        favorite: "",
        restaurant: ""
      }
    };
  }

  onClick() {
    let appStageNum = this.state.appStage + 1;
    this.setState({
      appStage: appStageNum
    });

    this.renderSwitch(this.state.appStage);
  }

  onClickPassState(stageChange) {
    this.state.questionnaire = stageChange;
    this.onClick();
  }

  renderSwitch(params) {
    switch (params) {
      case 1:
        return <Questionnaire onClick={this.onClickPassState} />;
      case 2:
        return <RoundOne onClick={this.onClick} />;
      case 3:
        return <RoundTwo onClick={this.onClick} />;
      case 4:
        return <h1> Round Three </h1>;
      default:
        return <Prompt onClick={this.onClick} />;
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderSwitch(this.state.appStage)}
        <footer>
          <div>
            Icons made by{" "}
            <a href="http://www.freepik.com" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank">
              CC 3.0 BY
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
