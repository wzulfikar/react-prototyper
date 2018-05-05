import React from 'react'
import { Link } from 'react-router-dom'

import { IRouteType, NavbarPositionEnum } from '../../routes'

const logo = require('../../assets/react-logo.png')

export interface INavbarProps {
  routes: Array<IRouteType>
}

export const Navbar = (props: INavbarProps) => (
  <nav className="navbar is-transparent">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <img src={logo} alt="IIUM Payment" height="50" />
      </Link>
      <div
        className="navbar-burger burger"
        data-target="navbarExampleTransparentExample"
      >
        <span />
        <span />
        <span />
      </div>
    </div>

    <div id="navbarExampleTransparentExample" className="navbar-menu">
      <div className="navbar-start">
        {props.routes.map(
          (route, i) =>
            route.path && route.position == NavbarPositionEnum.LEFT && (
              <Link key={i} className="navbar-item" to={route.path}>
                {route.title}
              </Link>
            )
        )}
        {/* <NavbarDropdown/> */}
      </div>

      <div className="navbar-end">
        {props.routes.map(
          (route, i) =>
            route.path && route.position == NavbarPositionEnum.RIGHT && (
              <Link key={i} className="navbar-item" to={route.path}>
                {route.title}
              </Link>
            )
        )}
        {/** right navbar
	    <div className="navbar-item">
	      <div className="field is-grouped">
	        <p className="control">
	          <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
	            <span className="icon">
	              <i className="fab fa-twitter"></i>
	            </span>
	            <span>
	              Tweet
	            </span>
	          </a>
	        </p>
	        <p className="control">
	          <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
	            <span className="icon">
	              <i className="fas fa-download"></i>
	            </span>
	            <span>Download</span>
	          </a>
	        </p>
	      </div>
	    </div>
		**/}
      </div>
    </div>
  </nav>
)

export default Navbar
