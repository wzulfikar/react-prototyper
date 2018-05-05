// libs
import React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// layout
import { Navbar, INavbarProps } from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// global css
import '../node_modules/ionicons/dist/fonts/*'
import '../node_modules/ionicons/dist/css/ionicons.css'
import '../node_modules/bulma/css/bulma.css'
import './styles/app.less'

// components
import routes from './routes'

const App = (props: INavbarProps) => (
  <div>
    <Router>
      <div>
        <Navbar routes={props.routes} />
        <Switch>
          {props.routes.map((route, i) => <Route key={i} {...route} />)}
        </Switch>
      </div>
    </Router>
    <Footer />
  </div>
)

ReactDOM.render(<App routes={routes} />, document.getElementById('app'))
