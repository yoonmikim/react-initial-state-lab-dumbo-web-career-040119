// your Bomb code here!

import React from 'react';

export default class Cell extends React.Component {

  constructor(props) {
    super(props)
    this.state = { secondsLeft: this.props.initialCount }
  }

  render(){
    return <div className="cell" style={{backgroundColor: this.state.color}}  onClick={this.handleClick} >{this.state.secondsLeft} seconds left before I go boom! </div>
  }

}