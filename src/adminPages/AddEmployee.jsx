import React, { useState } from 'react';
import './AddEmployee.css';
import { postData } from '../services/apiSessions';

const AddEmployee = ({ setModalOpen, fetchEmpData}) => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Age: '',
    Gender: '',
    DOB: '',
    PhoneNumber: '',
  });

  //#region validation
  const [hasValidationError, setHasValidationError] = useState(false);
  const[ageError, setAgeError] = useState('');
  const[nameError,setNameError] = useState('');
  const[lnameError,setlNameError] = useState('');
  const[dobError, setdobError] = useState('');


  const handleDob = (value) =>{
    const enteredDate = new Date(value);
    const currentDate = new Date();
    const ageDifference = currentDate.getFullYear() - enteredDate.getFullYear();

    if( ageDifference > 100 || ageDifference < 10){
      setdobError('Please enter valid DOB');
      setHasValidationError(true);
    }
    else{ 
      setdobError('')
      setHasValidationError(false);
    }

  }

  const handleLName = (value) =>{
    const isValidName = /^[a-zA-Z\s]{0,12}$/.test(value); 
    if(!isValidName){
      setlNameError('Please enter valid name');
      setHasValidationError(true);
    }
    else{
      setlNameError('');
      setHasValidationError(false);
    }
  }

  const handleName = (value) =>{
    const isValidName = /^[a-zA-Z\s]{3,15}$/.test(value); 
    if(!isValidName){
      setNameError('Please enter valid name');
      setHasValidationError(true);
    }
    else{
      setNameError('');
      setHasValidationError(false);
    }
  }
  const handleAge = (value) =>{
    const age = parseInt(value,10);
    if(isNaN(age) || age < 15 || age > 70){
      setAgeError('Age should be between 15 and 70');
      setHasValidationError(true);
    }
    else{
      setAgeError('');
      setHasValidationError(false);
    }
  }

  //#endregion
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = name === 'PhoneNumber' ? parseInt(value, 10) : value;
    if(name === 'Age'){ handleAge(value) }
    if(name === 'FirstName'){handleName(value)}
    if(name === 'LastName'){handleLName(value)}
    if(name === 'DOB'){handleDob(value)}
    setFormData((prevState) => ({
      ...prevState,
      [name]: parsedValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = '';
    try{     
      response = await postData('Users/createEmployee',formData); 
      if(response.ok){
        setModalOpen(false);
        fetchEmpData();       
      }
      else{
        console.log('error in Fetch');
      }      
      
    }catch(error){
      console.log('Error: ',error);
    }
    console.log(formData);   
    setModalOpen(false); 
    
  };

  const handleKeyDown = (e) => {
    if (!(e.key >= '0' && e.key <= '9') && e.key !== 'Backspace') {
      e.preventDefault();
    }
  };

  return (
    <div className="addEmp-container">     
      <div className="overlay" onClick={() => setModalOpen(false)}></div>
    
        <div className="form-modal">
          <form className="form-container" onSubmit={handleSubmit}>
            
            <label htmlFor="FirstName">First Name:</label>
            <input
              type="text"
              id="FirstName"
              name="FirstName"
              value={formData.FirstName}
              onChange={handleChange}
              required
            />
            <small className='input-error'>{nameError}</small>

            <label htmlFor="LastName">Last Name:</label>
            <input type="text" id="LastName" name="LastName" value={formData.LastName} onChange={handleChange} required />
            <small className='input-error'>{lnameError}</small>

            <label htmlFor="Age">Age:</label>          
            <input
              type="text"
              id="Age"
              name="Age"
              value={formData.Age}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
              required
            />
            <small className='input-error'>{ageError}</small>

            <label htmlFor="Gender">Gender:</label>
            <select id="Gender" name="Gender" value={formData.Gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <label htmlFor="DOB">Date of Birth:</label>
            <input type="date" id="DOB" name="DOB" value={formData.DOB} onChange={handleChange} required />
            <small className='input-error'>{dobError}</small>

            <label htmlFor="PhoneNumber">Phone Number:</label>
            <input type="number" id="PhoneNumber" name="PhoneNumber" value={formData.PhoneNumber} onChange={handleChange} pattern="[0-9]{10}" required />
            <button className="btn btn-primary" id='submit-btn' type="submit" disabled = {hasValidationError}>
              Add Employee
            </button>
          </form>
        </div>
    </div>
  );
};

export default AddEmployee;
