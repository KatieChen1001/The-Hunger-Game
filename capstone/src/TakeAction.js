import React, { Component } from "react";
// import ImgQuestion from "./ImgQuestion.js";
// import Prompt from "./Prompt.js";
import NextBtn from "./NextBtn.js";
import BackBtn from "./BackBtn.js";
import ImgQuestion from "./ImgQuestion.js";
import { Link } from "react-router-dom";

class TakeAction extends Component {
  constructor(props) {
    super(props);

    this.onNext = this.onNext.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
    this.onPrevious = this.onPrevious.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.fakeFunction = this.fakeFunction.bind(this);

    this.state = {
      stage: 0,
      pledge: ""
    };
  }

  fakeFunction() {
    console.log("'tis a fake one '");
  }

  onNext() {
    let stageNum = this.state.stage + 1;
    this.setState({
      stage: stageNum
    });
    this.renderSwitch(stageNum);
  }
  onPrevious() {
    let stageNum = this.state.stage - 1;
    this.setState({
      stage: stageNum
    });
    this.renderSwitch(stageNum);
  }

  handleInputChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }
  renderSwitch(params) {
    switch (params) {
      case 1:
        return (
          <div>
            <h1>
              But here is what you can change about your ordering habit to make
              things better!
            </h1>
            <BackBtn onClick={this.onPrevious} />
            <NextBtn onClick={this.onNext} />
          </div>
        );
      case 2:
        return (
          <div>
            <h1>No.1 Opt-out for utensils!</h1>
            <span> Step 1: Update to the latest version of Eleme</span>
            <img src="assets/report/action/1.png" width="50%" />
            <span>
              Step 2: Before you confirm to pay, you can choose whether you want
              utensils or not
            </span>
            <img src="assets/report/action/2.png" width="50%" />
            <span>Step 3: Choose the top option to opt-out</span>
            <div>
              <BackBtn onClick={this.onPrevious} />
              <NextBtn onClick={this.onNext} />
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h1>No.2 Avoid restaurants with excessive packaging!</h1>
            <span>
              Or leave a note for restaurants telling them you would like to
              have minimum packaging
            </span>
            <img src="assets/report/action/3.png" width="50%" />
            <div>
              <BackBtn onClick={this.onPrevious} />
              <NextBtn onClick={this.onNext} />
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h1>Make a pledge and take a badge!</h1>
            <p>I, hereby, solemnly swear: </p>
            <div className="pledge-choice-container">
              <div>
                <input
                  type="radio"
                  name="pledge"
                  value="800m"
                  onClick={this.handleInputChange}
                />
                <label htmlFor="800m">
                  I will not order from any restaurant within a 800m radius.
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="pledge"
                  value="optout"
                  onClick={this.handleInputChange}
                />
                <label htmlFor="optout">
                  I will opt-out for utensils when I eat at home.
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="pledge"
                  value="optout"
                  onClick={this.handleInputChange}
                />
                <label htmlFor="optout">
                  I will try my best to avoid ordering restaurants with
                  excessive packaging.
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="pledge"
                  value="optout"
                  onClick={this.handleInputChange}
                />
                <label htmlFor="optout">
                  I will try my best to recycle better.
                </label>
              </div>
            </div>
            <div>
              <BackBtn onClick={this.onPrevious} />
              <NextBtn onClick={this.onNext} />
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <h1>
              Thank you for taking your oath! Please take a badge or a sticker
              of your liking!
            </h1>
            <p>Bon Apetito</p>
            <Link to="/">
              <div className="playAgain">
                <ImgQuestion
                  label="report/again"
                  onClick={this.fakeFunction}
                  description="Play Again"
                />
              </div>
            </Link>
          </div>
        );
      default:
        return (
          <div>
            <h1>
              This is not too say that you should not order takeout anymore
            </h1>
            <NextBtn onClick={this.onNext} />
          </div>
        );
    }
  }

  render() {
    return (
      <div className="action margin-top">
        {this.renderSwitch(this.state.stage)}
      </div>
    );
  }
}

export default TakeAction;
