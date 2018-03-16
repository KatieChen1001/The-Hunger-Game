import React, { Component } from 'react';
import { Form, Text, Radio, RadioGroup, TextArea, Checkbox } from 'react-form';


class Questionnaire extends Component {
  constructor (props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.renderSwitch = this.renderSwitch.bind(this);

    this.state = {
      stage: 0,
      foodieAlias: '',
    }
  }

  onChange(e){
    let text = e.target.value;
    this.setState({
      foodieAlias: text,
    })
  }

  onClick(){
    let stageNum = this.state.stage + 1;
    this.setState({
      stage: stageNum,
    });

    this.renderSwitch(stageNum);
  }

  renderSwitch(params) {
    switch(params) {
      case 1:
        return <div>
        <h1>Hi, {this.state.foodieAlias}</h1>
        <p>Please choose your foodie ninja avatar</p>
        <a href="#"><img src="http://via.placeholder.com/100x100" onClick = {this.onClick}/></a>
        <a href="#"><img src="http://via.placeholder.com/100x100" onClick = {this.onClick}/></a>
        <a href="#"><img src="http://via.placeholder.com/100x100" onClick = {this.onClick}/></a>
        </div>;
      case 2:
        return <div>
          <h1>Q1. How often do you order online? </h1>
          <Form onSubmit={submittedValues => this.setState({ submittedValues })}>
            {formApi => (
              <form onSubmit={formApi.submitForm} id="form2">
                <RadioGroup field="frequency">
                  <Radio value="fanatic" id="fanatic" /><label >A. Daily</label>
                  <Radio value="pro" id="pro" /><label>B. 3 - 5 times a week</label>
                  <Radio value="rookie" id="rookie" /><label>C. 1 - 2 times a week </label>
                  <Radio value="amateur" id="amateur" /><label>D. 1 -3 times a month</label>
                </RadioGroup>
                <button type="submit" onClick = {this.onClick}>
                  Submit
                </button>
              </form>
            )}
          </Form>
        </div>;
      case 3:
        return <div>
        <h1>You chose {this.state.submittedValues.frequency}</h1>
        </div>
      default:
        return <div><label>What is your foodie alias</label>
                <input type="text" onChange = {this.onChange}></input>
                <input type="submit" onClick = {this.onClick}></input>
              </div>;
    };
  }

  render() {

    return (
      <div>
        {this.renderSwitch(this.state.stage)}
      </div>
    );
  }
}



export default Questionnaire;
