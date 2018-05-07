import React from 'react'

import Loadable from 'react-loadable'

interface ILoadingProps {
  error: string
  timedOut?: boolean
  pastDelay?: boolean
  retry?: () => void
}

export const Loading = (props: ILoadingProps) => {
  if (!props.retry) {
    props.retry = () => {
      console.log('retrying..')
    }
  }

  if (props.error) {
    console.log('err', props.error)
    return (
      <div>
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    )
  }

  if (props.timedOut) {
    return (
      <div>
        Taking a long time... <button onClick={props.retry}>Retry</button>
      </div>
    )
  }

  if (props.pastDelay) {
    return <div>Loading...</div>
  }

  return null
}

interface LoadableComponentOpts {
  loader: () => any
  loading: (props: ILoadingProps) => JSX.Element
  render?: ((loaded: any, props: any) => void) | undefined
}

const withLoadable = (
  importComponent: any,
  props?: any,
  exportedName?: string
) => {
  let opts = {
    loader: () => importComponent,
    loading: Loading,
    timeout: 500,
  } as LoadableComponentOpts

  if (exportedName) {
    opts.render = (loaded: any, props: any) => {
      let C = loaded[exportedName]
      return <C {...props} />
    }
  }

  const LoadableComponent = Loadable(opts)
  return <LoadableComponent {...props} />
}

export default withLoadable
