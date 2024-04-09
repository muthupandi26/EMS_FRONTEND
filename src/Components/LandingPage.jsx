import React from 'react'
import Navbar from './Navbar'
import EmployeeList from './EmployeeList';
import SideNavbar from './SideNavbar';

function LandingPage() {
  return (
    <div>
        <Navbar />
        <EmployeeList />
        <SideNavbar />
        
    </div>
  );
}

export default LandingPage