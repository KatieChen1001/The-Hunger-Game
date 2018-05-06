import React, { Component } from "react";
import "./Questionnaire.css";
import NextBtn from "./NextBtn.js";
import BackBtn from "./BackBtn.js";
import ImgQuestion from "./ImgQuestion.js";
import Progress from "./Progress.js";
import { Link } from "react-router-dom";

class Questionnaire extends Component {
  constructor(props) {
    super(props);

    this.onNext = this.onNext.bind(this);
    this.onPrevious = this.onPrevious.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleImgQuestionChange = this.handleImgQuestionChange.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
    this.switchSection = this.switchSection.bind(this);

    this.progressBarClicked = this.progressBarClicked.bind(this);
    this.noStressEat = this.noStressEat.bind(this);

    this.state = {
      stage: 0,
      foodieAlias: "",
      ninja: "",
      waimai: "",
      emoji: "",
      favorite: "",
      restaurant: "",
      mask: "",
      dataInApp: "questionnaire"
    };
  }

  // =========================== //
  // ***** Progress Bar ****** //
  // =========================== //
  progressBarClicked(stageNum) {
    this.setState({
      stage: stageNum
    });
    this.renderSwitch(stageNum);
  }

  // =========================== //
  // ***** Handling user input changes ****** //
  // =========================== //

  noStressEat() {
    this.setState({
      favorite: "Cheese Cake"
    });
    this.onNext();
  }

  handleInputChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }
  handleImgQuestionChange(name, imgURL) {
    this.setState(
      {
        [name]: imgURL,
        mask: imgURL
      },
      function() {
        console.log(this.state);
      }
    );
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

  switchSection() {
    this.props.onClick(this.state);
  }

  renderSwitch(params) {
    switch (params) {
      case 1:
        return (
          <div>
            <h1>Hi, {this.state.foodieAlias}</h1>
            <p>Please choose your foodie ninja avatar</p>
            <ImgQuestion
              label="ninja/fierceGirl"
              active={this.state.mask === "ninja/fierceGirl"}
              onClick={this.handleImgQuestionChange}
              name="ninja"
              description="Katniss Everdeen"
            />
            <ImgQuestion
              label="ninja/smileyGirl"
              active={this.state.mask === "ninja/smileyGirl"}
              onClick={this.handleImgQuestionChange}
              name="ninja"
              description="Primrose Everdeen"
            />
            <ImgQuestion
              label="ninja/smileyBoy"
              active={this.state.mask === "ninja/smileyBoy"}
              onClick={this.handleImgQuestionChange}
              name="ninja"
              description="Gale Hawthorne"
            />
            <ImgQuestion
              label="ninja/starvingBoy"
              active={this.state.mask === "ninja/starvingBoy"}
              onClick={this.handleImgQuestionChange}
              name="ninja"
              description="Peeta Mellark"
            />
            <div>
              <NextBtn onClick={this.onNext} />
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h1>Q1. How often do you order online? </h1>
            <input
              type="radio"
              name="waimai"
              value="fanatic"
              onClick={this.handleInputChange}
            />
            <label htmlFor="fanatic">A. Daily</label>
            <input
              type="radio"
              name="waimai"
              value="pro"
              onClick={this.handleInputChange}
            />
            <label htmlFor="pro">B. 3 - 5 times a week</label>
            <input
              type="radio"
              name="waimai"
              value="rookie"
              onClick={this.handleInputChange}
            />
            <label htmlFor="rookie">C. 1 -2 times a week </label>
            <input
              type="radio"
              name="waimai"
              value="amateur"
              onClick={this.handleInputChange}
            />
            <label htmlFor="amateur">D. 1 -3 times a month</label>
            <div>
              <NextBtn onClick={this.onNext} />
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h1>
              Q2. What emoji best express yourself while you are waiting for
              food?{" "}
            </h1>
            <ImgQuestion
              label="emoji/angry"
              active={this.state.mask === "emoji/angry"}
              onClick={this.handleImgQuestionChange}
              name="emoji"
              description="hangry"
              size="small"
            />
            <ImgQuestion
              label="emoji/impatient"
              active={this.state.mask === "emoji/impatient"}
              onClick={this.handleImgQuestionChange}
              name="emoji"
              description="can't wait"
              size="small"
            />
            <ImgQuestion
              label="emoji/drooling"
              active={this.state.mask === "emoji/drooling"}
              onClick={this.handleImgQuestionChange}
              name="emoji"
              description="drooling"
              size="small"
            />
            <ImgQuestion
              label="emoji/greedy"
              active={this.state.mask === "emoji/greedy"}
              onClick={this.handleImgQuestionChange}
              name="emoji"
              description="greedy"
              size="small"
            />
            <div>
              <NextBtn onClick={this.onNext} />
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h1>Q3. What is your stress eat go-to favorite?</h1>
            <input
              type="text"
              name="favorite"
              onChange={this.handleInputChange}
            />
            <button id="noStressEatBtn" onClick={this.noStressEat}>
              Nope I do not stress eat
            </button>
            <NextBtn onClick={this.onNext} />
          </div>
        );
      case 5:
        return (
          <div>
            <h1>
              Q4. The following four restaurant all sell exactly the same{" "}
              <span id="userFav">{this.state.favorite}</span>. Where would you
              order from?
            </h1>
            <div className="restaurantImgWrapper">
              <ImgQuestion
                label="restaurant/cheap"
                active={this.state.mask === "restaurant/cheap"}
                onClick={this.handleImgQuestionChange}
                name="restaurant"
                size="large"
              />
              <ImgQuestion
                label="restaurant/corner"
                active={this.state.mask === "restaurant/corner"}
                onClick={this.handleImgQuestionChange}
                name="restaurant"
                size="large"
              />
              <ImgQuestion
                label="restaurant/green"
                active={this.state.mask === "restaurant/green"}
                onClick={this.handleImgQuestionChange}
                name="restaurant"
                size="large"
              />
              <ImgQuestion
                label="restaurant/fancy"
                active={this.state.mask === "restaurant/fancy"}
                onClick={this.handleImgQuestionChange}
                name="restaurant"
                size="large"
              />
            </div>
            <NextBtn onClick={this.onNext} />
          </div>
        );
      case 6:
        return (
          <div>
            <h1>
              Your tribute profile is now complete. Please get ready to enter
              the arena.
            </h1>
            <Link to="/roundOne">
              <NextBtn onClick={this.switchSection} />
            </Link>
          </div>
        );
      default:
        return (
          <div>
            <h1>What is your foodie alias</h1>
            <input
              type="text"
              name="foodieAlias"
              onChange={this.handleInputChange}
            />
            <div>
              <NextBtn onClick={this.onNext} />
            </div>
          </div>
        );
    }
  }

  render() {
    // <Progress
    //   QuestionNum={this.state.stage}
    //   previousSection="/"
    //   nextSection="/roundOne"
    //   onClick={this.progressBarClicked}
    //   numOfSubsections={7}
    //   preName="Pre"
    // />
    return (
      <div className="margin-top">{this.renderSwitch(this.state.stage)}</div>
    );
  }
}

export default Questionnaire;
