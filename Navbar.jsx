// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar({ isLoggedIn }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo"><Link to="/">Game On</Link></h2>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/news" className="nav-link">News & Updates</Link>
      </div>
      <div className="navbar-right">
        {isLoggedIn ? (
          <Link to="/profile" className="nav-link profile-icon">👤</Link>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/signup" className="nav-link signup-btn">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
