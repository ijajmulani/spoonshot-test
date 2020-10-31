import React from 'react';
import './Header.css'

export default class Header extends React.Component {
  render() {
    return (
      <header className="header-section">
        <a className="logo" href="/">Cinibuzz</a>
        <nav className="header-nav-links">
          <a className="header-links" >Movie</a>
          <a className="header-links">TV Shows</a>
          <a className="header-links" >Kids</a>
        </nav>
      </header>
    );
  }
}