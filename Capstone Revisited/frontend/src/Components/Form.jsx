import React, { Component } from "react";
import InputQuestion from "./Questions/InputQuestion.jsx";
import MultiChoiceQuestion from "./Questions/MultipleChoiceQuestion.jsx";
import data from "../Data/questionData.json";
import "./Form.css";

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
    this.setState({ [questionId]: questionValue });
  }

  onChoiceSelected(answerId, questionId) {
    let questionID = "question" + questionId;
    this.setState({ [questionID]: answerId });
  }

  onSubmit(e) {
    e.preventDefault();
    const profile = this.state;
    let params;
    axios.post("http://localhost:3000/", profile).then(res => {
      console.log(res.data);
      window.location = "/hungerReport/" + res.data;
    });
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
      <div>
        <div class="titleimg"></div>
        <div class="titlecontainer w-container">
          <h1 class="titlestylecursive">Build Your Own</h1>
          <h1 class="titlestyle">HUNGER REPORT</h1>
        </div>
        <div className="div-block">
          <div className="questioncontainer w-container">
            <div className="w-form">
              <form onSubmit={this.onSubmit} className="form">
                {questionBlock}
                <input
                  type="submit"
                  value="GENERATE MY HUNGER REPORT"
                  data-wait="Your Highly Hypothetical Answer to Serious Questions Are Being Generated ..."
                  class="button btnanswer submitbtn w-button"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
