import React, { Component } from "react";
import PropTypes from "prop-types";
import "./NextBtn.css";

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
      <div>
        <img
          src="http://localhost:3000/assets/next.svg"
          onClick={this.onClick}
          width="30px"
        />
      </div>
    );
  }
}

NextBtn.propTypes = {
  onClick: PropTypes.func
};

export default NextBtn;
