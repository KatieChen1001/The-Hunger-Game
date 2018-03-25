import React, { Component } from "react";
import ImgQuestion from "./ImgQuestion.js";
import "./Report.css";

class Report extends Component {
  render() {
    const q = this.props.questionnaireData;
    const one = this.props.roundOneData;
    let hungerLevel, tendTo;
    if (q.emoji === "emoji/angry") {
      hungerLevel = "high enough to eat the fridge";
      tendTo = "explode into a ball of fire when food does not arrive on time";
    } else if (q.emoji === "emoji/impatient") {
      hungerLevel =
        "pretty high that you might eat anything that's still uncooked";
      tendTo = "turn into a grumpy cat as you wait";
    } else if (q.emoji === "emoji/drooling") {
      hungerLevel = "never low";
      tendTo = "drool all over the place at the thought of food";
    } else if (q.emoji === "emoji/greedy") {
      hungerLevel = "always high";
      tendTo = "have food fantacies in your dream";
    }

    return (
      <div>
        <h1>THE HUNGER REPORT</h1>
        <h3>
          Congratualtions, <span>{q.foodieAlias}</span> ! You are a waimai
          <span>{q.waimai}</span>.
        </h3>
        <h3>
          Your hunger level is <span>{hungerLevel}</span>. You tend to
          <span>{tendTo}</span>.
        </h3>
        <ImgQuestion label={q.emoji} />
        <h3>Your choice of weapon was:</h3>
        <ImgQuestion label={one.sword} />
        <ImgQuestion label={one.shield} />
        <h3>
          <span>10 trees were killed </span>for building your weapon{" "}
        </h3>
      </div>
    );
  }
}

export default Report;
