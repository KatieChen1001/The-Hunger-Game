import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ImgQuestion.css";

class ImgQuestion extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.name, this.props.label);
  }

  render() {
    const { size, onClick } = this.props;

    let classes = "svgImg";
    if (size) classes += " " + size;

    return (
      <div className="ImgQuestionWrapper">
        <img
          className={classes}
          src={"http://localhost:3000/assets/" + this.props.label + ".svg"}
          onClick={this.onClick}
          alt={this.props.name}
        />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

ImgQuestion.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium", "large"])
};

export default ImgQuestion;
