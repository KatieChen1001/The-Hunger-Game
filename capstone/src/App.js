import React, { Component } from 'react';
import './App.css';
import Prompt from './Prompt.js';
import Questionnaire from './Questionnaire.js';
import Game from './Game.js';
import Reveal from 'react-reveal/Reveal';


class App extends Component {

  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      stage: 0,
      alias: '',
    }

  }

  onClick(){
    let stageNum = this.state.stage + 1;
    this.setState({
      stage: stageNum
    });

    this.renderSwitch(stageNum);
  }



  renderSwitch(params) {
    switch(params) {
      case 1:
        return <Questionnaire />;
      case 2:
        return <h1 onClick = {this.onClick}>Pass the game stage</h1>;
      case 3:
        return <h1>Pass the game stage again</h1>;
      default:
        return <Prompt onClick = {this.onClick}/>;
    };
  }


  render() {
    return (
      <div className="App">
        {this.renderSwitch(this.state.stage)}
      </div>
    );
  }
}

export default App;
