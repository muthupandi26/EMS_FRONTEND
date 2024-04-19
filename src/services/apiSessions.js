
const baseURL = process.env.REACT_APP_EMS_FRONTEND_BASEURL;

//Fetch Operation 
export const fetchData = async (endpoint) =>{
    try{
        const response = await fetch(`https://localhost:44351/api/${endpoint}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response;
    }
    catch(error){
        console.error("Error in getting emp data:", error);
    }
  };


  //Post Operation 
export const postData = async (endpoint, data) =>{
    try{
        const response = await fetch(`https://localhost:44351/api/${endpoint}`,{
            method: 'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response;
    }
    catch(error){
        console.error('Error: ',error);
    }

};

//Put Operation 

export const updateEmployee = async (empId, editedEmployee) => {
    try {
        const response = await fetch(`https://localhost:44351/api/Users/updateEmployee?id=${empId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedEmployee),
        });
        if (!response.ok) {
            throw new Error('Failed to update employee');
        }
        return response; // Return updated data
    } catch (error) {
        console.error('Error updating employee:', error);
        throw error;
    }
};

//Delete Operation 
export const deleteEmployee = async (empId) => {
    try {
        const response = await fetch(`https://localhost:44351/api/Users/deleteEmployee?id=${empId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to delete employee');
        }

        return 'Employee deleted successfully'; 
    } catch (error) {
        console.error('Error deleting employee:', error);        
    }
};

