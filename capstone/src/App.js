import React, { Component } from "react";
import "./App.css";
import Prompt from "./Prompt.js";
import Questionnaire from "./Questionnaire.js";
import RoundOne from "./RoundOne.js";
import Report from "./Report.js";
import Report2 from "./Report2.js";
import Report3 from "./Report3.js";
import TakeAction from "./TakeAction";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    // this.renderSwitch = this.renderSwitch.bind(this);
    this.onClickPassState = this.onClickPassState.bind(this);
    this.state = {
      appStage: 0,
      questionnaire: {
        stage: "",
        foodieAlias: "",
        ninja: "",
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
    // this.renderSwitch(this.state.appStage);
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

    console.log(this.state.questionnaire);
  }

  // renderSwitch(params) {
  //   switch (params) {
  //     case 1:
  //       return <Questionnaire onClick={this.onClickPassState} />;
  //     default:
  //       return <Prompt onClick={this.onClick} />;
  //   }
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="textWrapper">
            <Route
              exact
              path="/"
              component={props => {
                return <Prompt onClick={this.onClick} />;
              }}
            />
            <Route
              path="/profile"
              component={props => {
                return <Questionnaire onClick={this.onClickPassState} />;
              }}
            />
            <Route
              path="/roundOne"
              component={props => {
                return <RoundOne onClick={this.onClickPassState} />;
              }}
            />
            <Route
              path="/hungerReport1"
              component={props => {
                return (
                  <Report
                    questionnaireData={this.state.questionnaire}
                    roundOneData={this.state.roundOne}
                  />
                );
              }}
            />
            <Route
              path="/hungerReport2"
              component={props => {
                return (
                  <Report2
                    questionnaireData={this.state.questionnaire}
                    roundOneData={this.state.roundOne}
                  />
                );
              }}
            />
            <Route
              path="/hungerReport3"
              component={props => {
                return (
                  <Report3
                    questionnaireData={this.state.questionnaire}
                    roundOneData={this.state.roundOne}
                  />
                );
              }}
            />
            <Route
              path="/takeAction"
              component={props => {
                return <TakeAction />;
              }}
            />
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
      </Router>
    );
  }
}

export default App;
