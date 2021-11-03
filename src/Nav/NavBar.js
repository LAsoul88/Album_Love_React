import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="nav__container">
        <div className="title__container">
          <h1><Link to="/albums">Album Love</Link></h1>
        </div>
        <div className="link__container">
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default NavBar;