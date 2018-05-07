import React, { Component } from 'react'

export default class About extends Component<{}, {}> {
	render() {
		return (
      <div className="container is-fluid">
      <div className="has-text-centered" style={{minHeight: '50vh'}}>
      	<p><b>React Prototyper</b></p>
	      Github repo:&nbsp;
	      <a href="https://github.com/wzulfikar/react-prototyper">
	      https://github.com/wzulfikar/react-prototyper
	      </a>
	      
	      <br/>
	      Storybook:&nbsp;
	      <a href="https://react-prototyper.surge.sh/storybook">
	      https://react-prototyper.surge.sh/storybook
	      </a>
      </div>
		  </div>
		)
	}
}
