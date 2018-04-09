import React, { Component } from "react";
// import Reveal from "react-reveal/Reveal";
import NextBtn from "./NextBtn.js";
import ImgQuestion from "./ImgQuestion.js";
import "./RoundOne.css";
import { Link } from "react-router-dom";

class RoundOne extends Component {
  constructor(props) {
    super(props);

    this.handleImgQuestionChange = this.handleImgQuestionChange.bind(this);
    this.onNext = this.onNext.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);
    this.switchSection = this.switchSection.bind(this);

    this.state = {
      stage: 0,
      foodGrabbed: "",
      sword: "",
      shield: "",
      dataInApp: "roundOne"
    };
  }

  onNext() {
    let stageNum = this.state.stage + 1;
    this.setState({
      stage: stageNum
    });
    this.renderSwitch(stageNum);
  }

  handleImgQuestionChange(name, imgURL) {
    this.setState({
      [name]: imgURL
    });
  }

  switchSection() {
    this.props.onClick(this.state);
  }

  renderSwitch(params) {
    switch (params) {
      case 1:
        return (
          <div className="roundOneWrapper">
            <h1>Grab</h1>
            <p>Choose ONE favorite from the item below:</p>
            <div className="iconWrapper">
              <ImgQuestion
                label="grab/porridge"
                name="foodGrabbed"
                onClick={this.handleImgQuestionChange}
                description="Porridge(皮蛋瘦肉粥)"
              />
              <ImgQuestion
                label="grab/burger"
                name="foodGrabbed"
                onClick={this.handleImgQuestionChange}
                description="Burger(香辣鸡腿堡)"
              />
              <ImgQuestion
                label="grab/cai"
                name="foodGrabbed"
                onClick={this.handleImgQuestionChange}
                description="Kung Pao Chicken(宫保鸡丁)"
              />
              <ImgQuestion
                label="grab/wrap"
                name="foodGrabbed"
                onClick={this.handleImgQuestionChange}
                description="Wraps(肉夹馍)"
              />
              <ImgQuestion
                label="grab/rice"
                name="foodGrabbed"
                onClick={this.handleImgQuestionChange}
                description="Fried Rice(扬州炒饭)"
              />
            </div>
            <NextBtn onClick={this.onNext} />
          </div>
        );
      case 2:
        return (
          <div className="roundOneWrapper">
            <h1>Pack</h1>
            <p>
              Choose ONE type of cutlery and ONE type of container. Note they
              are don’t just protect your food; they are your sword and shield
              as well!
            </p>
            <div className="iconWrapper">
              <div className="weaponCard">
                <ImgQuestion
                  label="pack/sword/chopsticks"
                  name="sword"
                  size="small"
                  onClick={this.handleImgQuestionChange}
                  description="Kung Fu Chopsticks"
                />
                <p>
                  Bonus Feature: In moment of emergency can be used to make a
                  raft
                </p>
              </div>
              <div className="weaponCard">
                <ImgQuestion
                  label="pack/sword/plastic"
                  name="sword"
                  size="small"
                  onClick={this.handleImgQuestionChange}
                  description="Plastic Combo"
                />
                <p>Bonus Feature: Can be used as darts, or fish spears</p>
              </div>
              <div className="weaponCard">
                <ImgQuestion
                  label="pack/sword/silverware"
                  name="sword"
                  size="small"
                  onClick={this.handleImgQuestionChange}
                  description="Louis IVX Royal Silverware"
                />
                <p>
                  Bonus Feature: When pulled out will radiate snobbiness which
                  can blind opponents
                </p>
              </div>
            </div>
            <NextBtn onClick={this.onNext} />
          </div>
        );

      case 3:
        return (
          <div className="roundOneWrapper">
            <h1>Pack</h1>
            <p>Choose ONE type of container.</p>
            <div className="iconWrapper">
              <div className="weaponCard">
                <ImgQuestion
                  label="pack/shield/plastic"
                  name="shield"
                  size="small"
                  onClick={this.handleImgQuestionChange}
                  description="Poisonous Plastic"
                />
                <p>Bonus Feature: When thrown away can poison your opponents</p>
              </div>
              <div className="weaponCard">
                <ImgQuestion
                  label="pack/shield/paper"
                  name="shield"
                  size="small"
                  onClick={this.handleImgQuestionChange}
                  description="Paper Thin"
                />
                <p>Bonus Feature: Sharp paper blade can cut down trees</p>
              </div>
              <div className="weaponCard">
                <ImgQuestion
                  label="pack/shield/tinFoil"
                  name="shield"
                  size="small"
                  onClick={this.handleImgQuestionChange}
                  description="Tin-Foil All Proof"
                />
                <p>
                  Bonus Feature: Waterproof, thermal insulation, bulletproof
                </p>
              </div>
            </div>
            <NextBtn onClick={this.onNext} />
          </div>
        );
      case 4:
        return (
          <div className="roundOneWrapper">
            <p>Weapon Ready! 3, 2, 1, GO!</p>
            <Link to="/hungerReport">
              <NextBtn onClick={this.switchSection} />
            </Link>
          </div>
        );
      default:
        return (
          <div className="roundOneWrapper">
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
