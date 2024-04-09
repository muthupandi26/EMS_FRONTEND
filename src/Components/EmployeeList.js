import React from 'react'
import { EmpData } from './RawData/EmployeeData'
import './EmployeeList.css'
import EmployeeRow from './ActionComponents/EmployeeRow'

const EmployeeList = () => {
  return (
    <div className="employee-list">
      <h2 className="table-heading">Employee List</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <EmployeeRow />
          {/* {EmpData.map(emp => (
            <EmployeeRow key={emp.Id} employee = {emp}  />
          ))} */}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
