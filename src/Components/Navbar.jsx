import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <div className="nav-logo">EMS</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Profile</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
        
    </div>
  );
}

export default Navbar