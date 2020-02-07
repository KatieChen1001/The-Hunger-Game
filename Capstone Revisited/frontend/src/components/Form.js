import React, { Component } from "react";
import InputQuestion from "./Questions/InputQuestion.js";
import MultiChoiceQuestion from "./Questions/MultipleChoiceQuestion.js";
import data from "../Data/questionData.json";

import axios from "axios";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question1: "",
      question3: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(inputData) {
    let questionId = "question" + inputData.nam;
    let questionValue = inputData.val;
    console.log("Name: " + questionId);
    console.log("Value: " + questionValue);

    this.setState({
      [questionId]: [questionValue]
    });
    console.log(this.state.question1);
    console.log(this.state.question3);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("submitted");

    // const profile = {
    //   alias: this.state.alias,
    //   frequency: this.state.frequency
    // };
    //
    // console.log(profile);
    //
    // axios
    //   .post("http://localhost:3000/", profile)
    //   .then(res => console.log(res.data));
    //
    // window.location = "/";
  }

  render() {
    let questionBlock;
    let choices;
    questionBlock = data.map((data, index) => {
      if (data.question.type === "input") {
        return (
          <InputQuestion
            data={data}
            onInputChange={this.onInputChange}
            key={index}
          />
        );
      } else if (data.question.type === "multipleChoice") {
        return <MultiChoiceQuestion data={data} key={index} />;
      }
    });

    return (
      <form onSubmit={this.onSubmit}>
        <div className="questionContainer">{questionBlock}</div>
        <input type="submit" value="Submit" />
        <h1>{this.state.question1}</h1>
        <h1>{this.state.question3}</h1>
      </form>
    );
  }
}
