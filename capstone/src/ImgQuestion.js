import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ImgQuestion.css";

class ImgQuestion extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      mask: "inactive"
    };
  }

  onClick() {
    this.props.onClick(this.props.name, this.props.label);
    let active = this.state.mask === "active" ? "inactive" : "active";
    this.setState({
      mask: active
    });
  }

  render() {
    const { size, onClick } = this.props;

    let classes = "svgImg";
    if (size) classes += " " + size;

    return (
      <div className="ImgQuestionWrapper">
        <img
          className={classes + " " + this.state.mask}
          src={"http://localhost:3000/assets/" + this.props.label + ".svg"}
          onClick={this.onClick}
          alt={this.props.name}
        />
        <span className={this.props.name}>{this.props.description}</span>
      </div>
    );
  }
}

ImgQuestion.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "large"])
};

export default ImgQuestion;
