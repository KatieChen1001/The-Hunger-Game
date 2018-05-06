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
        id="BackBtnImg"
        src="./assets/back.svg"
        onClick={this.onClick}
        width="40px"
        alt="Back Button"
        className="BackBtn"
      />
    );
  }
}

NextBtn.propTypes = {
  onClick: PropTypes.func
};

export default NextBtn;
