import React, { useState,useEffect } from 'react'
import { fetchData } from '../services/apiSessions'
import './EmployeeList.css'
import EmployeeRow from './EmployeeRow'
import AddEmployee from './AddEmployee'

const EmployeeList = () => {
  const[employee, setEmployees] = useState([]);
  const[modalOpen, setModalOpen] = useState(false);

  const baseURL = '';

  const fetchEmpData = async () =>{
    try{
      const response = await fetchData('Users/getEmployees');
      if(response.ok){
         const data = await response.json();
         setEmployees(data);
      }
    }catch(error){
      console.error("Error in fetching data: ",error)
    }
    
  };

  useEffect( () => {
      
    fetchEmpData();
  },[]);

  return (
    <div className="employee-list">
      <h2 className="table-heading">Employee List</h2>
      <button className ="btn btn-outline-primary addEmp-btn" onClick={ () => setModalOpen(true)}>Add Emp</button>
      {modalOpen && <AddEmployee setModalOpen = {setModalOpen} fetchEmpData = {fetchEmpData} />}
      <table className="employee-table">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>PhoneNumber</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <EmployeeRow /> */}
          {employee.map(emp => (
            <EmployeeRow key={emp.EmpId} employee = {emp} fetchEmpData = {fetchEmpData}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
