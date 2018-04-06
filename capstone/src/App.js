import React, { Component } from "react";
import "./App.css";
import Prompt from "./Prompt.js";
import Questionnaire from "./Questionnaire.js";
import NextBtn from "./NextBtn.js";
import RoundOne from "./RoundOne.js";
import Report from "./Report.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
    this.onClickPassState = this.onClickPassState.bind(this);
    this.state = {
      appStage: 1,
      questionnaire: {
        stage: "",
        foodieAlias: "",
        ninja: "",
        orderFrequency: "",
        waimai: "",
        emoji: "",
        favorite: "",
        restaurant: "",
        dataInApp: ""
      },
      roundOne: {
        stage: "",
        foodGrabbed: "",
        sword: "",
        shield: "",
        dataInApp: ""
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

  onClickPassState(stateChange) {
    if (stateChange.dataInApp === "questionnaire") {
      this.setState({
        questionnaire: stateChange
      });
    } else if (stateChange.dataInApp === "roundOne") {
      this.setState({
        roundOne: stateChange
      });
    }

    this.onClick();
  }

  renderSwitch(params) {
    switch (params) {
      case 1:
        return <Questionnaire onClick={this.onClickPassState} />;
      case 2:
        return <RoundOne onClick={this.onClickPassState} />;
      case 3:
        return (
          <Report
            questionnaireData={this.state.questionnaire}
            roundOneData={this.state.roundOne}
          />
        );
      default:
        return <Prompt onClick={this.onClick} />;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="textWrapper">
          {this.renderSwitch(this.state.appStage)}
        </div>
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
