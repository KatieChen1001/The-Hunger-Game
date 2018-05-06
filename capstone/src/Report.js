import React, { Component } from "react";
import ImgQuestion from "./ImgQuestion.js";
import "./Report.css";
import Prompt from "./Prompt.js";
import NextBtn from "./NextBtn.js";
import { Link } from "react-router-dom";

class Report extends Component {
  constructor(props) {
    super(props);
    this.fakeFunction = this.fakeFunction.bind(this);
  }

  fakeFunction() {
    console.log("fake function");
  }

  render() {
    // const q = this.props.questionnaireData;
    // const one = this.props.roundOneData;

    const q = {
      foodieAlias: "Katie",
      ninja: "ninja/fierceGirl",
      waimai: "fanatic",
      emoji: "emoji/greedy",
      favorite: "pizza",
      restaurant: "restaurant/cheap"
    };

    const one = {
      foodGrabbed: "grab/rice",
      sword: "pack/sword/plastic",
      shield: "pack/shield/foil"
    };
    const lookUpEmoji = {
      "emoji/angry": {
        hungerLevel: "high enough to eat the fridge",
        tendTo: "explode into a ball of fire when food does not arrive on time"
      },
      "emoji/impatient": {
        hungerLevel:
          "pretty high that you might eat anything that's still uncooked",
        tendTo: "turn into a grumpy cat as you wait"
      },
      "emoji/drooling": {
        hungerLevel: "never low",
        tendTo: "drool all over the place at the thought of food"
      },
      "emoji/greedy": {
        hungerLevel: "always high",
        tendTo: "have food fantacies in your dream"
      }
    };

    const lookUpWaimai = {
      fanatic: {
        // order frequency in the number of orders per day: 1,
        orderFreq: "7 times above average",
        OrderPerDay: 1,
        badge: "report/waimai/badge/fanatic",
        bin: "report/waimai/bin/fanatic"
      },
      pro: {
        orderFreq: "3 times above average",
        OrderPerDay: 0.7,
        badge: "report/waimai/badge/pro",
        bin: "report/waimai/bin/pro"
      },
      rookie: {
        orderFreq: "right on average with the country",
        OrderPerDay: 0.2,
        badge: "report/waimai/badge/rookie",
        bin: "report/waimai/bin/rookie"
      },
      amateur: {
        orderFreq: "below national average",
        OrderPerDay: 0.1,
        badge: "report/waimai/badge/amateur",
        bin: "report/waimai/bin/amateur"
      }
    };

    let hungerLevel, tendTo, orderFreq, badge, bin;
    // === content based on emoji choice === //
    hungerLevel = lookUpEmoji[q.emoji].hungerLevel;
    tendTo = lookUpEmoji[q.emoji].tendTo;

    // === content based on waimai order frequency choice === //
    orderFreq = lookUpWaimai[q.waimai].orderFreq;
    badge = lookUpWaimai[q.waimai].badge;
    console.log(badge);
    bin = lookUpWaimai[q.waimai].bin;

    return (
      <div className="report" id="report1">
        <div className="report-textWrapper">
          <h1>THE HUNGER REPORT</h1>
          <p>
            Congratualtions, <span>{q.foodieAlias}</span>!
          </p>
          <div className="ninja-profile">
            <ImgQuestion label={q.ninja} size="profile" />
          </div>
          <br />
          <p>
            You are a waimai <ImgQuestion label={badge} />. An average Chinese
            consumer order delivery about <span>1</span> time every week, making
            your order frequency <span>{orderFreq}</span>.
          </p>
          <div>
            <ImgQuestion label={bin} size="large" />
          </div>
          <br />
          <p>
            <ImgQuestion label={q.emoji} size="medium" /> is your foodie face.
            Your hunger level is <span>{hungerLevel}</span>. You tend to{" "}
            <span>{tendTo}</span>.{" "}
          </p>
        </div>
        <Link to="/hungerReport2">
          <NextBtn onClick={this.fakeFunction} />
        </Link>
      </div>
    );
  }
}

export default Report;
