// your Bomb code here!

import React from 'react';

export default class Cell extends React.Component {

  constructor(props) {
    super(props)
    this.state = { secondsLeft: this.props.initialCount }
  }

  render() {
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

    return (
      <div>{message}</div>
    )
  }
}
