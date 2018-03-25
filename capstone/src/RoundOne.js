import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import NextBtn from "./NextBtn.js";
import ImgQuestion from "./ImgQuestion.js";

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
          <div className="iconWrapper">
            <h1>Grab</h1>
            <ImgQuestion
              label="grab/porridge"
              name="foodGrabbed"
              size="small"
              onClick={this.handleImgQuestionChange}
              description="Porridge(皮蛋瘦肉粥)"
            />
            <ImgQuestion
              label="grab/burger"
              name="foodGrabbed"
              size="small"
              onClick={this.handleImgQuestionChange}
              description="Burger(香辣鸡腿堡)"
            />
            <ImgQuestion
              label="grab/cai"
              name="foodGrabbed"
              size="small"
              onClick={this.handleImgQuestionChange}
              description="Kung Pao Chicken(宫保鸡丁)"
            />
            <ImgQuestion
              label="grab/wrap"
              name="foodGrabbed"
              size="small"
              onClick={this.handleImgQuestionChange}
              description="Wraps(肉夹馍)"
            />
            <ImgQuestion
              label="grab/rice"
              name="foodGrabbed"
              size="small"
              onClick={this.handleImgQuestionChange}
              description="Fried Rice(扬州炒饭)"
            />
            <NextBtn onClick={this.onNext} />
          </div>
        );
      case 2:
        return (
          <div>
            <h1>Pack</h1>
            <div className="swords">
              <ImgQuestion
                label="pack/sword/chopsticks"
                name="sword"
                size="small"
                onClick={this.handleImgQuestionChange}
                description="Kung Fu Chopsticks"
              />
              <p>
                Bonus Feature: In moment of emergency can be used to make a raft
              </p>
              <ImgQuestion
                label="pack/sword/plastic"
                name="sword"
                size="small"
                onClick={this.handleImgQuestionChange}
                description="Plastic Combo"
              />
              <p>Bonus Feature: Can be used as darts, or fish spears</p>
              <ImgQuestion
                label="pack/sword/silverware"
                name="sword"
                size="small"
                onClick={this.handleImgQuestionChange}
                description="Louis IVX Royal Silverware"
              />
              <p>
                Bonus Feature: When pulled out will radiate snobbiness which can
                blind opponents
              </p>
            </div>
            <div className="shields">
              <ImgQuestion
                label="pack/shield/plastic"
                name="shield"
                size="small"
                onClick={this.handleImgQuestionChange}
                description="Poisonous Plastic"
              />
              <p>Bonus Feature: When thrown away can poison your opponents</p>
              <ImgQuestion
                label="pack/shield/paper"
                name="shield"
                size="small"
                onClick={this.handleImgQuestionChange}
                description="Paper Thin"
              />
              <p>Bonus Feature: Sharp paper blade can cut down trees</p>
              <ImgQuestion
                label="pack/shield/tinFoil"
                name="shield"
                size="small"
                onClick={this.handleImgQuestionChange}
                description="Tin-Foil All Proof"
              />
              <p>Bonus Feature: Waterproof, thermal insulation, bulletproof</p>
            </div>
            <NextBtn onClick={this.onNext} />
          </div>
        );
      case 3:
        return (
          <div>
            <p>
              Food [check] Swords & weapons [check] Onwards and upwards into the
              chaotic Shanghai traffic! “Expelliarmus!” ---- 滴，滴，滴----
            </p>
            <NextBtn onClick={this.switchSection} />
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
