import React from 'react'
import '../styles/components/hello-world.less'

const logo = require('../assets/react-logo.png')

// 'HelloWorldProps' describes the shape of props.
export interface HelloWorldProps {
  username: string
  onMouseEnter: () => void
}

// `HelloWorld` is a stateless component
// that accepts `HelloWorldProps`.
export const HelloWorld = (props: HelloWorldProps) => (
  <div className="hello">
    <h1>Hello world from {props.username} via ReactJS!</h1>
    <p style={{ color: 'black' }}>
      Create your own component inside <code>/src/components/</code>
      <br />
      and update <code>/stories/index.jsx</code> to include the new component in
      storybook.
    </p>
    <img src={logo} onMouseEnter={props.onMouseEnter} width="100" />
  </div>
)

export default HelloWorld
