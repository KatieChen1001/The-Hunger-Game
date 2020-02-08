import React, { Component } from "react";
import InputQuestion from "./Questions/InputQuestion.js";
import MultiChoiceQuestion from "./Questions/MultipleChoiceQuestion.js";
import data from "../Data/questionData.json";

// import axios from "axios";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onChoiceSelected = this.onChoiceSelected.bind(this);
  }

  onInputChange(inputData) {
    let questionId = "question" + inputData.nam;
    let questionValue = inputData.val;

    this.setState({
      [questionId]: questionValue
    });
    console.log(this.state);
  }

  onChoiceSelected(choiceContent, questionId) {
    let questionID = "question" + questionId;
    this.setState({
      [questionID]: choiceContent
    });
    console.log(this.state);
  }

  onSubmit() {
    // e.preventDefault();
    console.log(this.state);
    // alert("You are submitting " + this.state);

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
        return (
          <MultiChoiceQuestion
            data={data}
            key={index}
            questionId={data.id}
            onChoiceSelected={this.onChoiceSelected}
          />
        );
      }
    });

    return (
      <form>
        <div className="questionContainer">{questionBlock}</div>
        <button onSubmit={this.onSubmit}>Submit</button>
      </form>
    );
  }
}
