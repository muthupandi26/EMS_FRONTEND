import React, { useState } from 'react'
import { updateEmployee, deleteEmployee } from '../services/apiSessions';

function EmployeeRow({employee,fetchEmpData}) {
    const[isEditing, setIsEditing] = useState(false);
    const[editedEmployee, setEditedEmployee] = useState({...employee});

    const handleInputChange =  (e, field) =>{
        const value = e.target.value;
        setEditedEmployee( prevEmp =>({
            ...prevEmp,
            [field]:value,
        }));
    };

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleSave = async (empId, editedEmployee) => {
        try {
            const updatedData = await updateEmployee(empId, editedEmployee);
            console.log('Updated data:', updatedData);
         
            if (updatedData) {
                setIsEditing(false); 
                fetchEmpData(); 
            } else {               
                console.error('Invalid response received after update');
            }   
        } catch (error) {
            console.error('Error updating employee:', error);            
        }
    };
  
    //#region  Old Code
    //Save Operation
    // const handleSave = async (empId,editedEmployee) => {
    //     try{
    //         fetch(`${baseURL}/Users/updateEmployee?id=${empId}`,{
    //             method:'PUT',
    //             headers:{
    //                 'Content-Type': 'application/json',
    //             },
    //             body:JSON.stringify(editedEmployee),
    //         })
    //         .then(response => {
    //             if (response.ok) {
    //               if (response.status === 204) {
    //                 console.log('Update successful with no content');
    //               } else {
    //                 return response.json();
    //               }
    //             } else {
    //               throw new Error('Failed to update');
    //             }
    //           })
    //           .then(data => {
    //             console.log('Received data:', data);
    //             fetchData();
    //           })
    //           .catch(error => {
    //             console.error('Error updating:', error);
    //           });
                      
            
    //     }
    //     catch(error){
    //         console.error("Error in updating the Employee: ",error);
    //     }
        
    //     console.log('Employee saved:', editedEmployee);
    //     setIsEditing(false);
    // };

      
        // Perform delete operation
    // const deleteEmp = async (EmpID) => {
    //     try{
    //         await fetch(`${baseURL}/Users/deleteEmployee?id=${EmpID}`,{
    //             method: 'DELETE',
    //         });
    //         fetchEmpData();
    //     }
    //     catch(error){
    //         console.error("Error while deleting the emp: ",error);
    //     }
    //     console.log('Employee deleted:', editedEmployee.Id);
    // }
    //#endregion
    
    const deleteEmp = async (empId) => {
        try {
            const message = await deleteEmployee(empId);
            if(message){
                fetchEmpData(); 
            }
            else{
                console.log("Error in Deleting the emp")
            }
            
        } catch (error) {
            console.error('Error deleting employee:', error);
            
        }
    };
        
    
  return (
    <tr key={employee.EmpId}>
        
        <td>
            {isEditing ? (
                <input type="text" value={editedEmployee.FirstName} onChange={(e) => handleInputChange(e,'FirstName')}/>
            ): 
            (employee.FirstName)}
        </td>
        <td>
            {isEditing ? (
                <input type="text" value={editedEmployee.LastName} onChange={(e) => handleInputChange(e,'LastName')}/>
            ): 
            (employee.LastName)}
        </td>
        <td>
            {isEditing ? (
                <input type="text" value={editedEmployee.Gender} onChange={(e) => handleInputChange(e,'Gender')}/>
            ): 
            (employee.Gender)}
        </td>
        <td>
            {isEditing ? (
                <input type="text" value={editedEmployee.DOB} onChange={(e) => handleInputChange(e,'DOB')}/>
            ): 
            ( employee.DOB ? employee.DOB.split('T')[0] : '')}
        </td>
        <td>
            {isEditing ? (
                <input type="text" value={editedEmployee.PhoneNumber} onChange={(e) => handleInputChange(e,'PhoneNumber')}/>
            ): 
            (employee.PhoneNumber)}
        </td>
        <td>
            {isEditing ? (
                <>
                    <button onClick={() => handleSave(editedEmployee.EmpId, editedEmployee)} className="btn btn-outline-success">Save</button>
                    <button onClick={() => setIsEditing(false)} className="btn btn-info">Cancel</button>
                </>
            ) : (
                <>
                    <button onClick={handleEdit} className="btn btn-outline-primary">Edit</button>
                    <button onClick={() => deleteEmp(employee.EmpId)} className="btn btn-outline-danger">Delete</button>
                </>
            )}
        </td>

        
    </tr>
  );
}


export default EmployeeRow;
