import React, { Component } from "react";
import Answer from "../Answers/Answer.jsx";

export default class MultiChoiceQuestion extends React.Component {
  constructor(props) {
    super(props);

    this.onChoiceSelected = this.onChoiceSelected.bind(this);
  }

  onChoiceSelected(choiceContent) {
    this.props.onChoiceSelected(choiceContent, this.props.questionId);
  }
  render() {
    let options;
    let answerData = this.props.data.answer;
    
    // Render options w. graphics
    options = answerData.choices.map((choices, index) => {
      return (
        <Answer
          data={choices}
          onChoiceSelected={this.onChoiceSelected}
          key={`multichoice-${index}`}
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
