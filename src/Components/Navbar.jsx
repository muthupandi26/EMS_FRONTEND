import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <div className="nav-logo">EMS</div>
          <ul className="nav-links">
            
            <li><a href="#about"><span class="material-symbols-outlined">account_circle</span></a></li>
            <li><a href="#services"><span class="material-symbols-outlined">notifications</span></a></li>
            
          </ul>
        </nav>
      </header>
        
    </div>
  );
}

export default Navbar