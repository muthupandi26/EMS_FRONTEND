import React from 'react'
import { EmpData } from './RawData/EmployeeData'
import './EmployeeList.css'

const EmployeeList = () => {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {EmpData.map(emp => (
            <tr key = {emp.Id}>
                <td>{emp.FirstName} {emp.LastName}</td>
                <td>{emp.Gender}</td>
                <td>{emp.DOB}</td>
                <td>{emp.Email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
