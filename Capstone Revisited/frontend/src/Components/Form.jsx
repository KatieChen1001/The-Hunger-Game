import React, { Component } from "react";
import InputQuestion from "./Questions/InputQuestion.jsx";
import MultiChoiceQuestion from "./Questions/MultipleChoiceQuestion.jsx";
import data from "../Data/questionData.json";

import axios from "axios";

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
    // Log the state as callback of setState
    this.setState({ [questionId]: questionValue }, () => {
      console.log(this.state);
    });
  }

  onChoiceSelected(answerId, questionId) {
    let questionID = "question" + questionId;
    this.setState({ [questionID]: answerId }, () => {
      console.log(this.state);
    });
  }

  onSubmit(e) {
    e.preventDefault();
    // console.log(this.state);
    const profile = this.state;
    // console.log(profile);
    axios
      .post("http://localhost:3000/", profile)
      .then(res => console.log(res.data));

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
        let questionId = "question" + data.id;
        return (
          <MultiChoiceQuestion
            data={data}
            key={questionId}
            questionId={data.id}
            onChoiceSelected={this.onChoiceSelected}
            selectedAnswer={this.state[questionId]}
          />
        );
      }
    });

    return (
      <form onSubmit={this.onSubmit}>
        <div className="questionContainer">{questionBlock}</div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
