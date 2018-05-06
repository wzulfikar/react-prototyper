import React, { Component } from 'react'

import AntDesign from '../components/AntDesign'

export default class AntDesignDemo extends Component<{}, {}> {
  onRowClick = (item: string) => {
    console.log('row clicked:', item)
  }

  onSwitch = (checked: boolean) => {
    console.log('switch changed:', checked)
  }

  onRateChange = (rate: number) => {
    console.log('rate changed:', rate)
  }

  render() {
    return (
      <div className="container is-fluid">
        <AntDesign
          onSwitch={this.onSwitch}
          onRowClick={this.onRowClick}
          onRateChange={this.onRateChange}
        />
      </div>
    )
  }
}
