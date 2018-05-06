import React, { Component } from "react";
import { Link } from "react-router-dom";
import Prompt from "./Prompt.js";
import NextBtn from "./NextBtn.js";
import BackBtn from "./BackBtn.js";
import ImgQuestion from "./ImgQuestion.js";
import "./Report.css";

class Report2 extends Component {
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

    let factor, assumption, restaurantName, foodGrabbedName, topFavourite;

    // === content based on resturant choice === //
    factor = lookUpRestaurant[q.restaurant].factor;
    assumption = lookUpRestaurant[q.restaurant].asump;
    restaurantName = lookUpRestaurant[q.restaurant].name;

    // === content based on food grabbed choice === //
    foodGrabbedName = lookUpFoodGrabbed[one.foodGrabbed].name;
    topFavourite = lookUpFoodGrabbed[one.foodGrabbed].top;

    return (
      <div className="report" id="report2">
        <div className="report-textWrapper">
          <h1>THE HUNGER REPORT</h1>
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
          <Link to="/hungerReport1">
            <BackBtn onClick={this.fakeFunction} />
          </Link>

          <Link to="/hungerReport3">
            <NextBtn onClick={this.fakeFunction} />
          </Link>
        </div>
      </div>
    );
  }
}

export default Report2;
