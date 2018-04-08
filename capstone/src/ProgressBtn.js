import React, { Component } from "react";
import "./ProgressBtn.css";

class ProgressBtn extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.progressBtnName);
  }
  render() {
    let circleClassName = this.props.active ? "active" : "inactive";
    return (
      <div className="progressBtnName-container">
        <svg width="20" height="20">
          <circle
            className={circleClassName}
            cx="10"
            cy="10"
            r="10"
            onClick={this.onClick}
          />
        </svg>
        <span className="progressBtnName-span">
          {this.props.progressBtnName}
        </span>
      </div>
    );
  }
}

export default ProgressBtn;
