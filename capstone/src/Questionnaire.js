import React, { Component } from "react";
import "./Questionnaire.css";
import NextBtn from "./NextBtn.js";
import ImgQuestion from "./ImgQuestion.js";

class Questionnaire extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
    this.onNext = this.onNext.bind(this);
    this.switchSection = this.switchSection.bind(this);

    this.aliasChange = this.aliasChange.bind(this);
    this.ninjaChange = this.ninjaChange.bind(this);
    this.emojiChange = this.emojiChange.bind(this);
    this.favoriteChange = this.favoriteChange.bind(this);
    this.restaurantChange = this.restaurantChange.bind(this);

    this.state = {
      stage: 0,
      foodieAlias: "",
      ninja: "",
      orderFrequency: "",
      waimai: "",
      emoji: "",
      favorite: "",
      restaurant: ""
    };
  }

  aliasChange(e) {
    this.setState({
      foodieAlias: e.target.value
    });
  }

  ninjaChange(label) {
    this.setState({
      ninja: label
    });
  }

  onClick(e) {
    this.setState({
      orderFrequency: e.target.value,
      waimai: e.target.id
    });
  }

  emojiChange(label) {
    this.setState({
      emoji: label
    });
  }

  favoriteChange(e) {
    this.setState({
      favorite: e.target.value
    });
  }

  restaurantChange(label) {
    this.setState({
      restaurant: label
    });
  }

  onNext() {
    let stageNum = this.state.stage + 1;
    this.setState({
      stage: stageNum
    });
    this.renderSwitch(stageNum);
  }

  switchSection() {
    this.props.onClick(this.state);
  }

  // switchSection() {
  //   this.props.onClick();
  // }

  // componentDidUpdate() {
  //   localStorage.setItem("appData", JSON.stringify(this.state));
  // }

  renderSwitch(params) {
    switch (params) {
      case 1:
        return (
          <div>
            <h1>Hi, {this.state.foodieAlias}</h1>
            <p>Please choose your foodie ninja avatar</p>
            <ImgQuestion label="burger" onClick={this.ninjaChange} />
            <ImgQuestion label="ramen" onClick={this.ninjaChange} />
            <ImgQuestion label="pizza" onClick={this.ninjaChange} />
            <NextBtn onClick={this.onNext} />
          </div>
        );
      case 2:
        return (
          <div>
            <h1>Q1. How often do you order online? </h1>
            <input
              type="radio"
              id="fanantic"
              name="frequency"
              value="4"
              onClick={this.onClick}
            />
            <label htmlFor="fanantic">A. Daily</label>
            <input
              type="radio"
              id="pro"
              name="frequency"
              value="3"
              onClick={this.onClick}
            />
            <label htmlFor="pro">B. 3 - 5 times a week</label>
            <input
              type="radio"
              id="rookie"
              name="frequency"
              value="2"
              onClick={this.onClick}
            />
            <label htmlFor="rookie">C. 1 -2 times a week </label>
            <input
              type="radio"
              id="amateur"
              name="frequency"
              value="1"
              onClick={this.onClick}
            />
            <label htmlFor="amateur">D. 1 -3 times a month</label>
            <NextBtn onClick={this.onNext} />
          </div>
        );
      case 3:
        return (
          <div>
            <h1>
              Q2. What emoji best express yourself while you are waiting for
              food?{" "}
            </h1>
            <ImgQuestion label="burger" onClick={this.emojiChange} />
            <ImgQuestion label="ramen" onClick={this.emojiChange} />
            <ImgQuestion label="pizza" onClick={this.emojiChange} />
            <NextBtn onClick={this.onNext} />
          </div>
        );
      case 4:
        return (
          <div>
            <h1>Q3. What is your stress eat go-to favorite?</h1>
            <input type="text" onChange={this.favoriteChange} />
            <NextBtn onClick={this.onNext} />
          </div>
        );
      case 5:
        return (
          <div>
            <h1>
              Q4. The following four restaurant all sell exactly the same{" "}
              {this.state.favorite}. Where would you order from?{" "}
            </h1>
            <ImgQuestion label="burger" onClick={this.restaurantChange} />
            <ImgQuestion label="ramen" onClick={this.restaurantChange} />
            <ImgQuestion label="pizza" onClick={this.restaurantChange} />
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
            <NextBtn onClick={this.switchSection} />
          </div>
        );
      default:
        return (
          <div>
            <h1>What is your foodie alias</h1>
            <input type="text" onChange={this.aliasChange} />
            <NextBtn onClick={this.onNext} />
          </div>
        );
    }
  }

  render() {
    return <div>{this.renderSwitch(this.state.stage)}</div>;
  }
}

export default Questionnaire;
