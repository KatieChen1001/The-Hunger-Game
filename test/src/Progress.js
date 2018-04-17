import React, { Component } from "react";
import "./Progress.css";
import PropTypes from "prop-types";

class Progress extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classes = "inactive";
    return (
      <footer>
        <svg>
          <circle cx="15" cy="15" r="15" className={classes + " active"} />
          <circle cx="60" cy="15" r="15" className={classes} />
          <circle cx="105" cy="15" r="15" className={classes} />
        </svg>
      </footer>
    );
  }
}

export default Progress;
