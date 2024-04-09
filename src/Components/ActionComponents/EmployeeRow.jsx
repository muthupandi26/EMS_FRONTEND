import React, { useEffect, useState } from 'react'

function EmployeeRow({employee}) {
    const[isEditing, setIsEditing] = useState(false);
    const[employees, setEmployees] = useState([]);
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

    //Get Operation
    const baseURL = process.env.REACT_APP_EMS_FRONTEND_BASEURL;
    const fetchData = async () =>{
        try{
            const response = await fetch(`${baseURL}/Users/getEmployees`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setEmployees(data);
            console.log(data);

        }
        catch(error){
            console.error("Error in getting emp data:", error);
        }
    };

    useEffect( () => {
      
      fetchData();
    },[]);

    const handleSave = async (empId,editedEmployee) => {
        try{
            const response = fetch(`${baseURL}/Users/updateEmployee?id=${empId}`,{
                method:'PUT',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(editedEmployee),
            });
            const updateUser = await response.json();
            console.log(updateUser);
            fetchData();
        }
        catch(error){
            console.error("Error in updating the Employee: ",error);
        }
        
        console.log('Employee saved:', editedEmployee);
        setIsEditing(false);
    };

      
        // Perform delete operation
    const deleteEmp = async (EmpID) => {
        try{
            await fetch(`${baseURL}/Users/deleteEmployee?id=${EmpID}`,{
                method: 'DELETE',
            });
            fetchData();
        }
        catch(error){
            console.error("Error while deleting the emp: ",error);
        }
        console.log('Employee deleted:', editedEmployee.Id);
    }
        
      

      

  return (
    <tr key={employee.Id}>
        
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
            (employee.DOB)}
        </td>
        <td>
            {isEditing ? (
                <input type="text" value={editedEmployee.Email} onChange={(e) => handleInputChange(e,'Email')}/>
            ): 
            (employee.Email)}
        </td>
        <td>
            { isEditing ?(
                <button onClick={() => handleSave(editedEmployee.Id, editedEmployee)} className="btn btn-outline-success" >Save</button>
            ): <button onClick={handleEdit} className="btn btn-outline-primary">Edit</button> }
            <button onClick={() => deleteEmp(employee.Id)} className="btn btn-outline-danger">Delete</button>
            
        </td>
        
    </tr>
  );
}


export default EmployeeRow;
