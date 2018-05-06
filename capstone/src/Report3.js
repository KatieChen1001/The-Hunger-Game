import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImgQuestion from "./ImgQuestion.js";
import BackBtn from "./BackBtn.js";
import NextBtn from "./NextBtn.js";
import Prompt from "./Prompt.js";

import "./Report.css";

class Report3 extends Component {
  constructor(props) {
    super(props);
    this.fakeFunction = this.fakeFunction.bind(this);
  }

  fakeFunction() {
    console.log("fake function");
  }

  render() {
    const q = this.props.questionnaireData;
    const one = this.props.roundOneData;

    // const q = {
    //   foodieAlias: "Katie",
    //   ninja: "ninja/fierceGirl",
    //   waimai: "fanatic",
    //   emoji: "emoji/greedy",
    //   favorite: "pizza",
    //   restaurant: "restaurant/cheap"
    // };
    //
    // const one = {
    //   foodGrabbed: "grab/rice",
    //   sword: "pack/sword/plastic",
    //   shield: "pack/shield/foil"
    // };

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

    const lookUpSword = {
      "pack/sword/chopsticks": {
        name: "Kung Fu Chopsticks",
        pollutionType: "wood",
        imgLabel: "report/shield/paper"
      },
      "pack/sword/plastic": {
        name: "Plastic Combo",
        pollutionType: "plastic",
        imgLabel: "report/sword/plastic"
      },
      "pack/sword/silverware": {
        name: "Louis IVX Royal Silverware",
        pollutionType: "excessive",
        imgLabel: "report/sword/excessive"
      }
    };

    const lookUpShield = {
      "pack/shield/plastic": {
        name: "Poisonous Plastic",
        pollutionType: "plastic",
        imgLabel: "report/shield/plastic"
      },
      "pack/shield/paper": {
        name: "Paper Thin",
        pollutionType: "wood",
        imgLabel: "report/shield/paper"
      },
      "pack/shield/foil": {
        name: "Aluminum-Foil All Proof",
        pollutionType: "aluminum",
        imgLabel: "report/shield/foil"
      }
    };

    let swordName,
      swordPollutionType,
      swordPollution,
      shieldName,
      shieldPollutionType,
      shieldPollution;

    // === pollution of utensils === //
    swordName = lookUpSword[one.sword].name;
    swordPollutionType = lookUpSword[one.sword].pollutionType;
    swordPollution = lookUpSword[one.sword].imgLabel;

    // === pollution of containers === //
    shieldName = lookUpShield[one.shield].name;
    shieldPollutionType = lookUpShield[one.shield].pollutionType;
    shieldPollution = lookUpShield[one.shield].imgLabel;

    let text, number;

    number = lookUpWaimai[q.waimai].OrderPerDay;

    if (shieldPollutionType === "plastic") {
      text =
        "10 plastic bags when accumulated and ingested could take a shark’s life. In the past 30 days, you probably “eaten”: " +
        "30 * " +
        number +
        " order per day" +
        " = " +
        30 * number +
        " sharks";
    } else if (shieldPollutionType === "wood") {
      text =
        "“14 million trees are cut to produce the 10 billion paper grocery bags used by Americans each year, which equates to 0.0014 tree / bag, meaning that in the past week you have consumed " +
        "7 * " +
        number +
        " order per day" +
        " = " +
        7 * number +
        " Christmas Tree";
    } else if (shieldPollutionType === "aluminum") {
      var runningTime = number * 7 * 3 * 170 * 1055 / 530000 * 30 / 60;
      text =
        "Last week your total order was " +
        number * 7 +
        "; Every package requires 3g of aluminum foil, to produce all the packaging needed for your food requires " +
        number * 7 * 3 * 170 * 1055 +
        "J" +
        ", which equals to you running for " +
        runningTime.toFixed(2) +
        " h";
    }

    return (
      <div className="margin-top report" id="report">
        <div className="report-textWrapper">
          <h1>THE HUNGER REPORT</h1>
          <p>
            Your choice of <span className="strike-through">sword</span> cutlery
            was: <span>{swordName}</span>
          </p>
          <div>
            <ImgQuestion label={swordPollution} size="large" />
          </div>
          <p>
            Your choice of <span className="strike-through">shield</span> food
            container was: <span>{shieldName}</span>
          </p>
          <p>{text}</p>
          <div>
            <ImgQuestion label={shieldPollution} size="large" />
          </div>

          <Link to="/hungerReport2">
            <BackBtn onClick={this.fakeFunction} />
          </Link>

          <Link to="/takeAction">
            <NextBtn onClick={this.fakeFunction} />
          </Link>
        </div>
      </div>
    );
  }
}

export default Report3;
