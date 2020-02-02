import React, { Component } from 'react';
import axios from 'axios';

export default class Question extends Component {
constructor(props) {
  super(props);

  this.onChangeAlias = this.onChangeAlias.bind(this);
  this.onChangeFrequency = this.onChangeFrequency.bind(this);
  this.onSubmit = this.onSubmit.bind(this);

  this.state = {
    alias: '',
    frequency: ''
  }
}

onChangeAlias(e) {
 this.setState({
   alias: e.target.value
 })
}

onChangeFrequency(e) {
 this.setState({
   frequency: e.target.value
 })
}

onSubmit(e) {
  e.preventDefault();

  const profile = {
    alias: this.state.alias,
    frequency: this.state.frequency
  }

  console.log(profile);

  axios.post('http://localhost:3000/', profile)
    .then(res => console.log(res.data));

  window.location = '/';
}
render(){
  return (
    <div className="App">

      <form onSubmit={this.onSubmit}>
      <p>alias</p>
          <input  type="text"
              required
              value={this.state.alias}
              onChange={this.onChangeAlias}
          />
        <p>frequency</p>
          <input  type="text"
              required
              value={this.state.frequency}
              onChange={this.onChangeFrequency}
          />
          <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

}
