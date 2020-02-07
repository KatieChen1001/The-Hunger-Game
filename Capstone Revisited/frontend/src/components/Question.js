import React, { Component } from "react";
import Button from "./Button";
import questionData from "../Data/questionData.json";

class Question extends React.Component {
  render() {
    let questionBlock;
    let choices;
    questionBlock = questionData.map((questionData, index) => {
      if (questionData.requireInput) {
        return (
          <div>
            <span>Question {questionData.questionId}</span>
            <h1>{questionData.questionTitle}</h1>
            <input type="text" />
          </div>
        );
      } else if (questionData.requireChoice) {
        if (questionData.choiceImg) {
          choices = questionData.choice.map((choices, index) => {
            return (
              <div>
                <p>{choices.choiceContent}</p>
                <img src={choices.choiceSrc} />
              </div>
            );
          });
        } else {
          choices = questionData.choice.map((choices, index) => {
            return (
              <div>
                <button>{choices}</button>
              </div>
            );
          });
        }
        return (
          <div>
            <span>Question </span>
            <span>{questionData.questionId}</span>
            <h1>{questionData.questionTitle}</h1>
            {choices}
          </div>
        );
      }
    });

    return <div className="questionContainer">{questionBlock}</div>;
  }
}

export default Question;
