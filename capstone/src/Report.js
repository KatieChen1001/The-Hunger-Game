import React, { Component } from "react";
import ImgQuestion from "./ImgQuestion.js";
import "./Report.css";

class Report extends Component {
  render() {
    const q = this.props.questionnaireData;
    const one = this.props.roundOneData;
    const lookUpEmoji = {
      "emoji/angry": {
        h: "high enough to eat the fridge",
        t: "explode into a ball of fire when food does not arrive on time"
      },
      "emoji/impatient": {
        h: "pretty high that you might eat anything that's still uncooked",
        t: "turn into a grumpy cat as you wait"
      },
      "emoji/drooling": {
        h: "never low",
        t: "drool all over the place at the thought of food"
      },
      "emoji/greedy": {
        h: "always high",
        t: "have food fantacies in your dream"
      }
    };

    const lookUpOrderFreq = {
      fanatic: {
        avg: "7 times above average"
      },
      pro: {
        avg: "3 times above average"
      },
      rookie: {
        avg: "right on average with the country"
      },
      amateur: {
        avg: "below national average"
      }
    };

    const lookUpRestaurant = {
      "restaurant/green": {
        factor: "environmentally friendliness",
        asump: "good friend of our Planet Earth"
      },
      "restaurant/corner": {
        factor: "timing",
        asump: "lazy couch potato"
      },
      "restaurant/fancy": {
        factor: "instagramability",
        asump: "into whatever that looks pretty"
      },
      "restaurant/cheap": {
        factor: "price",
        asump: "broke college student like me"
      }
    };

    const lookUpFoodGrabbed = {
      "grab/porridge": {
        top: "1"
      },
      "grab/burger": {
        top: "2"
      },
      "grab/cai": {
        top: "3"
      },
      "grab/wrap": {
        top: "4"
      },
      "grab/rice": {
        top: "5"
      }
    };

    let hungerLevel, tendTo, avgFreq, factor, assumption, topFavourite;

    if (
      !lookUpEmoji[q.emoji] ||
      !lookUpOrderFreq[q.waimai] ||
      !lookUpRestaurant[q.resturant] ||
      !lookUpFoodGrabbed[one.foodGrabbed]
    ) {
      hungerLevel = tendTo = avgFreq = factor = assumption = topFavourite = (
        <span>Oooops looks like you missed this one</span>
      );
    } else {
      hungerLevel = lookUpEmoji[q.emoji].h;
      tendTo = lookUpEmoji[q.emoji].t;
      avgFreq = lookUpOrderFreq[q.waimai].avg;
      factor = lookUpRestaurant[q.resturant].factor;
      assumption = lookUpRestaurant[q.resturant].asump;
      topFavourite = lookUpFoodGrabbed[one.foodGrabbed].top;
    }

    if (!q.foodieAlias) {
      q.foodieAlias = "Annonymous Agent";
    }

    if (!q.ninja) {
      q.ninja = "sad";
    }
    if (!q.emoji) {
      q.emoji = "sad";
    }

    if (!q.resturant) {
      q.resturant = "sad";
    }

    return (
      <div>
        <h1>THE HUNGER REPORT</h1>
        <h3>
          Congratualtions, <span>{q.foodieAlias}</span>!
          <ImgQuestion label={q.ninja} />
          You are a waimai <span>{q.waimai}</span>. An average Chinese consumer
          order delivery about <span>1</span> time every week, making your order
          frequency {avgFreq}.
        </h3>
        <h3>
          Your hunger level is <span>{hungerLevel}</span>. You tend to{" "}
          <span>{tendTo}</span>.
        </h3>

        <ImgQuestion label={q.emoji} />
        <h3>
          Your choice of restaurant was
          <ImgQuestion label={q.resturant} size="medium" />
          <span>{factor}</span> might be an important factor when you order
          online. You are probably <span>{assumption}</span>
        </h3>
        <h3>
          The food you grabbed was
          <ImgQuestion label={one.foodGrabbed} />
          It was the top <span>{topFavourite}</span> favourite of Chinese
          consumers in 2017.
        </h3>
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
