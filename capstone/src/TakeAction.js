import React, { Component } from "react";
import ImgQuestion from "./ImgQuestion.js";
import Prompt from "./Prompt.js";
import { Link } from "react-router-dom";

class TakeAction extends Component {
  constructor(props) {
    super(props);
    this.fakeFunction = this.fakeFunction.bind(this);
    this.clickToPrint = this.clickToPrint.bind(this);

    this.state = {
      stage: 0
    };
  }

  fakeFunction() {
    console.log("fake function");
  }

  clickToPrint() {
    this.setState({
      topBtnContainer: "hidden"
    });
    window.print();
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

    const lookUpRestaurant = {
      "restaurant/green": {
        name: "Organic and Green",
        factor: "environmentally friendliness",
        asump: "good friend of our Planet Earth"
      },
      "restaurant/corner": {
        name: "Right Round the Corner",
        factor: "timing",
        asump: "lazy couch potato"
      },
      "restaurant/fancy": {
        name: "Fancy and posh",
        factor: "instagramability",
        asump: "into whatever that looks pretty"
      },
      "restaurant/cheap": {
        name: "Cheaply Affordable",
        factor: "price",
        asump: "broke college student like me"
      }
    };

    const lookUpFoodGrabbed = {
      "grab/porridge": {
        name: "porridge (皮蛋瘦肉粥)",
        top: "1"
      },
      "grab/burger": {
        name: "burger（香辣鸡腿堡）",
        top: "2"
      },
      "grab/cai": {
        name: "Kung Pao Chicken(宫保鸡丁)",
        top: "3"
      },
      "grab/wrap": {
        name: "Wraps(肉夹馍)",
        top: "4"
      },
      "grab/rice": {
        name: "Fried Rice(扬州炒饭)",
        top: "5"
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

    let hungerLevel,
      tendTo,
      orderFreq,
      badge,
      bin,
      factor,
      assumption,
      restaurantName,
      foodGrabbedName,
      topFavourite,
      swordName,
      swordPollutionType,
      swordPollution,
      shieldName,
      shieldPollutionType,
      shieldPollution;

    // if (
    //   !lookUpEmoji[q.emoji] ||
    //   !lookUpOrderFreq[q.waimai] ||
    //   !lookUpRestaurant[q.resturant] ||
    //   !lookUpFoodGrabbed[one.foodGrabbed]
    // ) {
    //   hungerLevel = tendTo = avgFreq = factor = assumption = topFavourite = (
    //     <span>Oooops looks like you missed this one</span>
    //   );
    // } else {

    // === content based on emoji choice === //
    hungerLevel = lookUpEmoji[q.emoji].hungerLevel;
    tendTo = lookUpEmoji[q.emoji].tendTo;

    // === content based on waimai order frequency choice === //
    orderFreq = lookUpWaimai[q.waimai].orderFreq;
    badge = lookUpWaimai[q.waimai].badge;
    bin = lookUpWaimai[q.waimai].bin;

    // === content based on resturant choice === //
    factor = lookUpRestaurant[q.restaurant].factor;
    assumption = lookUpRestaurant[q.restaurant].asump;
    restaurantName = lookUpRestaurant[q.restaurant].name;

    // === content based on food grabbed choice === //
    foodGrabbedName = lookUpFoodGrabbed[one.foodGrabbed].name;
    topFavourite = lookUpFoodGrabbed[one.foodGrabbed].top;

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

    let topBtnActivity = this.state.topBtnContainer;
    // }

    // if (!q.foodieAlias) {
    //   q.foodieAlias = "Annonymous Agent";
    // }
    //
    // if (!q.ninja) {
    //   console.log(q.ninja);
    //   q.ninja = "sad";
    // }
    // if (!q.emoji) {
    //   q.emoji = "sad";
    // }
    //
    // if (!q.resturant) {
    //   q.resturant = "sad";
    // }

    return (
      <div>
        <div className="margin-top report" id="report">
          <div className="report-textWrapper">
            <h1>THE HUNGER REPORT</h1>
            <p>
              Congratualtions, <span>{q.foodieAlias}</span>!
            </p>
            <div className="ninja-profile">
              <ImgQuestion label="ninja/fierceGirl" size="profile" />
            </div>
            <br />
            <p>
              You are a waimai <ImgQuestion label={badge} />. An average Chinese
              consumer order delivery about <span>1</span> time every week,
              making your order frequency <span>{orderFreq}</span>.
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

            <br />
            <p>
              Your choice of restaurant was <span>{restaurantName}</span>
            </p>
            <div>
              <ImgQuestion label={q.restaurant} size="medium-large" />
            </div>
            <p>
              <span>{factor}</span> might be an important factor when you order
              online. You are probably <span>{assumption}</span>
            </p>

            <br />
            <p>
              The food you grabbed was <span>{foodGrabbedName}</span>.{"    "}
              <ImgQuestion label={one.foodGrabbed} size="medium" />
            </p>

            <p>
              It was the top <span>{topFavourite}</span> favourite of Chinese
              consumers in 2017.
            </p>

            <div>
              <ImgQuestion label="report/topFavChart" size="large" />
            </div>
            <p>
              Your choice of <span className="strike-through">sword</span>{" "}
              cutlery was: <span>{swordName}</span>
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
            <Link to="/takeAction">
              <ImgQuestion label="report/action" onClick={this.onPlayAgain} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TakeAction;
