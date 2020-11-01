import React from 'react';
import './Header.css'

export default class Header extends React.Component {
  render() {
    return (
      <header className="header-section">
        <a className="logo" href="/spoonshot-test/build/">Cinibuzz</a>
        <nav className="header-nav-links">
          <a href="/spoonshot-test/build/" className="header-links" >Movie</a>
          <a href="/spoonshot-test/build/" className="header-links">TV Shows</a>
          <a href="/spoonshot-test/build/" className="header-links" >Kids</a>
        </nav>
      </header>
    );
  }
}