import React, { Component } from "react";
import Answer from "../Answers/Answer.jsx";

export default class MultiChoiceQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.onChoiceSelected = this.onChoiceSelected.bind(this);
  }

  onChoiceSelected(answerId) {
    this.props.onChoiceSelected(answerId, this.props.questionId);
  }
  render() {
    let options;
    let answerData = this.props.data.answer;
    
    // Render options and highlight the selected one.
    options = answerData.choices.map((choice, index) => {
      let selected = false;
      if (choice.answerId == this.props.selectedAnswer) {
        selected = true;
      }
      return (
        <Answer
          data={choice}
          onChoiceSelected={this.onChoiceSelected}
          key={`multichoice-${index}`}
          selected={selected}
        />
      );
    });

    return (
      <div>
        <h1>{this.props.data.question.title}</h1>
        {options}
      </div>
    );
  }
}
