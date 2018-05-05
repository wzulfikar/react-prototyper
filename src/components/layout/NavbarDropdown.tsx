import React from 'react';

const NavbarDropdown = () => (
  <div className="navbar-item has-dropdown is-hoverable">
    <a className="navbar-link" href="/documentation/overview/start/">
      Docs
    </a>
    <div className="navbar-dropdown is-boxed">
      <a className="navbar-item" href="/documentation/overview/start/">
        Overview
      </a>
      <a
        className="navbar-item"
        href="https://bulma.io/documentation/modifiers/syntax/"
      >
        Modifiers
      </a>
      <a
        className="navbar-item"
        href="https://bulma.io/documentation/columns/basics/"
      >
        Columns
      </a>
      <a
        className="navbar-item"
        href="https://bulma.io/documentation/layout/container/"
      >
        Layout
      </a>
      <a
        className="navbar-item"
        href="https://bulma.io/documentation/form/general/"
      >
        Form
      </a>
      <hr className="navbar-divider" />
      <a
        className="navbar-item"
        href="https://bulma.io/documentation/elements/box/"
      >
        Elements
      </a>
      <a
        className="navbar-item is-active"
        href="https://bulma.io/documentation/components/breadcrumb/"
      >
        Components
      </a>
    </div>
  </div>
);

export default NavbarDropdown;
