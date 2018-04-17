import React, { Component } from "react";
import ImgQuestion from "./ImgQuestion.js";
import "./Report.css";
import { Link } from "react-router-dom";

class Report extends Component {
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
      shield: "pack/shield/paper"
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
        badge: "report/waimai/badge/badge"
      },
      pro: {
        orderFreq: "3 times above average",
        OrderPerDay: 0.7,
        badge: "report/waimai/badge/badge"
      },
      rookie: {
        orderFreq: "right on average with the country",
        OrderPerDay: 0.2,
        badge: "report/waimai/badge/badge"
      },
      amateur: {
        orderFreq: "below national average",
        OrderPerDay: 0.1,
        badge: "report/waimai/badge/badge"
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
        imgLabel: "report/shield/plastic"
      },
      "pack/sword/plastic": {
        name: "Plastic Combo",
        pollutionType: "plastic",
        imgLabel: "report/shield/plastic"
      },
      "pack/sword/silverware": {
        name: "Louis IVX Royal Silverware",
        pollutionType: "excessive",
        imgLabel: "report/shield/plastic"
      }
    };

    const lookUpShield = {
      "pack/sword/chopsticks": {
        name: "Kung Fu Chopsticks",
        pollutionType: "wood",
        imgLabel: "report/shield/plastic"
      },
      "pack/sword/plastic": {
        name: "Plastic Combo",
        pollutionType: "plastic",
        imgLabel: "report/shield/wood"
      },
      "pack/sword/silverware": {
        name: "Louis IVX Royal Silverware",
        pollutionType: "excessive",
        imgLabel: "report/shield/plastic"
      }
    };

    let hungerLevel,
      tendTo,
      orderFreq,
      factor,
      assumption,
      restaurantName,
      foodGrabbedName,
      topFavourite,
      swordName,
      pollutionType,
      swordPollution;

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

    // === content based on resturant choice === //
    factor = lookUpRestaurant[q.restaurant].factor;
    assumption = lookUpRestaurant[q.restaurant].asump;
    restaurantName = lookUpRestaurant[q.restaurant].name;

    // === content based on food grabbed choice === //
    foodGrabbedName = lookUpFoodGrabbed[one.foodGrabbed].name;
    topFavourite = lookUpFoodGrabbed[one.foodGrabbed].top;

    // === pollution of utensils === //
    swordName = lookUpSword[one.sword].name;
    pollutionType = lookUpSword[one.sword].pollutionType;
    swordPollution = lookUpSword[one.sword].imgLabel;

    let text, number;

    number = lookUpWaimai[q.waimai].OrderPerDay;

    if (pollutionType === "plastic") {
      text =
        "10 plastic bags when accumulated and ingested could take a shark’s life. In the past 30 days, you probably “eaten”: " +
        "30 * " +
        number +
        " order per day" +
        " = " +
        30 * number +
        " sharks";
    } else if (pollutionType === "wood") {
      text =
        "“14 million trees are cut to produce the 10 billion paper grocery bags used by Americans each year, which equates to 0.0014 tree / bag, meaning that in the past week you have consumed " +
        "7 * " +
        number +
        " order per day" +
        " = " +
        7 * number +
        " Christmas Tree";
    }

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
      <div className="margin-top report">
        <h1>THE HUNGER REPORT</h1>
        <p>
          Congratualtions, <span>{q.foodieAlias}</span>!
        </p>
        <div className="ninja-profile">
          <ImgQuestion label="ninja/fierceGirl" size="profile" />
        </div>
        <br />
        <p>
          You are a waimai{" "}
          <ImgQuestion label="report/waimai/badge/badge" size="medium" />. An
          average Chinese consumer order delivery about <span>1</span> time
          every week, making your order frequency <span>{orderFreq}</span>.
        </p>
        <br />
        <p>
          <ImgQuestion label={q.emoji} size="medium" /> is your foodie face.
          Your hunger level is <span>{hungerLevel}</span>. You tend to{" "}
          <span>{tendTo}</span>.{" "}
        </p>
        <br />
        <p>
          Your choice of restaurant was <span>{restaurantName}</span>
          <div>
            <ImgQuestion label={q.restaurant} size="large" />
          </div>
          <span>{factor}</span> might be an important factor when you order
          online. You are probably <span>{assumption}</span>
        </p>
        <br />
        <p>
          The food you grabbed was <span>{foodGrabbedName}</span>.
        </p>
        <div>
          <ImgQuestion label={one.foodGrabbed} size="medium" />
        </div>
        <p>
          It was the top <span>{topFavourite}</span> favourite of Chinese
          consumers in 2017.
        </p>

        <div>
          <ImgQuestion label="report/topFavChart" size="large" />
        </div>
        <p>
          Your choice of <span className="strike-through">sword </span> cutlery
          was: <span>{swordName}</span>
        </p>
        <div>
          <ImgQuestion label={swordPollution} size="large" />
        </div>
        <p>{text}</p>
        <ImgQuestion label={one.shield} />

        <Link to="/">
          <p>Play Again!</p>
        </Link>
      </div>
    );
  }
}

export default Report;
