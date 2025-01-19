import React, { Component } from 'react'

export class WelcomeMessage extends Component {
  render() {
    return (
      <div>
        <h3>Welcome to React!</h3>
        <h3>{this.props.num}</h3>
      </div>
    )
  }
}

export default WelcomeMessage
