import React, { Component } from "react";
import AnswerGraphics from "../Answers/AnswerGraphics";

export default class MultiChoiceQuestion extends React.Component {
  render() {
    let options;
    let answerData = this.props.data.answer;
    if (answerData.graphics) {
      // render options w. graphics
      options = answerData.choices.map((choices, index) => {
        return (
          <AnswerGraphics
            content={choices.content}
            graphicSrc={choices.graphicSrc}
          />
        );
      });
    } else {
      // render options w/o graphics
      options = answerData.choices.map((choices, index) => {
        return (
          <div>
            <button>{choices.content}</button>
          </div>
        );
      });
    }
    return (
      <div>
        <h1>{this.props.data.question.title}</h1>
        {options}
      </div>
    );
  }
}
