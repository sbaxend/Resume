import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-wordmark">Seth Baxendell</Link>
      <Link className="navLink" to="/user">Portfolio</Link>
    </nav>
  );
}

export default Nav;
