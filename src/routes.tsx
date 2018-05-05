import React from 'react'

import Home from './scenes/Home'
import About from './scenes/About'
import AntDesignDemo from './scenes/AntDesignDemo'
import PageNotFound from './components/layout/PageNotFound'

export enum NavbarPositionEnum {
  LEFT,
  RIGHT,
  NONE,
}

export interface IRouteType {
  title: string
  exact?: boolean
  props?: any
  path?: string
  position: NavbarPositionEnum
  render: (props?: object) => React.ReactNode
}

const routes: Array<IRouteType> = [
  {
    title: 'Home',
    path: '/',
    exact: true,
    position: NavbarPositionEnum.LEFT,
    render: props => <Home {...props} />,
  },
  {
    title: 'About',
    path: '/about',
    exact: true,
    position: NavbarPositionEnum.RIGHT,
    render: props => <About {...props} />,
  },
  {
    title: 'Ant Design Demo',
    path: '/antd-demo',
    exact: true,
    position: NavbarPositionEnum.RIGHT,
    render: props => <AntDesignDemo {...props} />,
  },
  {
    title: 'Page Not Found',
    position: NavbarPositionEnum.NONE,
    render: () => <PageNotFound />,
  },
]

export default routes
