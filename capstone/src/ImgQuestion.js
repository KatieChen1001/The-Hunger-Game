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

    let activeImg = this.props.active ? "active" : "inactive";
    let imgClasses = "svgImg";

    if (size) imgClasses += " " + size;
    if (activeImg) imgClasses += " " + activeImg;

    return (
      <div className="ImgQuestionWrapper" onClick={this.onClick}>
        <img
          className={imgClasses}
          src={"./assets/" + this.props.label + ".svg"}
          alt={this.props.name}
        />
        <span className={this.props.name}>{this.props.description}</span>
        <p>{this.props.bonus}</p>
      </div>
    );
  }
}

ImgQuestion.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium", "large", "profile"])
};

export default ImgQuestion;
