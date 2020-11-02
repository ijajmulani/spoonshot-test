import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default class Header extends React.Component {
  render() {
    return (
      <header className="header-section">
        <Link to="/" className="logo">Cinibuzz</Link>
        <nav className="header-nav-links">
          <Link to="/" className="header-links">Movie</Link>
          <Link to="/" className="header-links">TV Shows</Link>
          <Link to="/" className="header-links">Kids</Link>
        </nav>
      </header>
    );
  }
}