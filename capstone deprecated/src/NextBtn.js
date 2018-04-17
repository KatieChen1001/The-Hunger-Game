import React, { Component } from "react";
import PropTypes from "prop-types";

class NextBtn extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick();
  }

  render() {
    return (
      <img
        src="http://localhost:3000/assets/next.svg"
        onClick={this.onClick}
        width="40px"
        alt="Next Button"
        className="NextBtn"
      />
    );
  }
}

NextBtn.propTypes = {
  onClick: PropTypes.func
};

export default NextBtn;
