import React, { useState } from 'react'
import './SideNavbar.css';


function SideNavbar() {
    const[isNavOpen, setIsNavOpen] = useState(true);
  return (
    <>
        <button className="sidebar-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
            <span class="material-symbols-outlined">{isNavOpen? "toggle_on":"toggle_off"}</span>            
        </button>
        <nav className={`nav ${isNavOpen ? "nav-open":"nav-closed"}`}>
            
            <ul>
                <a href="#home"><li className="links">Home</li></a>
                <a href="#Company"><li className="links">Company</li></a>
                <a href="#Services"><li className="links">Services</li></a>
                <a href="#contact"><li className="links">Contact</li></a>
            </ul>
            
        </nav>
    </>
  );
}

export default SideNavbar;