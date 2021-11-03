import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="nav__container">
      <Router>
        <div className="title__container">
          <h1><Link to="/">Album Love</Link></h1>
        </div>
        <div className="link__container">
          <ul>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>
      </Router>
    </div>
  )
}

export default NavBar;