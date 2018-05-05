import React, { Component } from 'react'

import HelloWorld from '../components/HelloWorld'

export default class Home extends Component<{}, {}> {
  handleMouseEnter() {
    alert('mouse enter')
  }

  render() {
    return (
      <HelloWorld username="Heimdall" onMouseEnter={this.handleMouseEnter} />
    )
  }
}
