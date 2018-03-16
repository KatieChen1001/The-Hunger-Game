import React, { Component } from 'react';


class Question extends Component {

  constructor(props){
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.props.onClick();
  }
  render() {
    return (
      <div onClick = {this.onClick}>
        <h1>Your Name</h1>
      </div>
    );
  }
}

export default Question;
