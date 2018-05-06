import React from 'react'

export const LoadableDemo = () => (
  <div style={{ margin: '20px auto', maxWidth: 500 }}>
    <div style={{ textAlign: 'center' }}>
      <h1>
        <b>Hello world from loadable component</b>
      </h1>
      <p>This component was loaded using code-splitting!</p>
    </div>
    <p style={{ textAlign: 'left' }}>
      usage:{' '}
      <code style={{ color: 'black' }}>
        withLoadable(import('./components/LoadableDemo'))
      </code>
      <br />
      (see more in <code style={{ color: 'black' }}>src/routes.tsx</code>)
    </p>
  </div>
)

export default LoadableDemo
