import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">TodoApp</div>
      <ul className="nav-links">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><button className="logout-button">Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;