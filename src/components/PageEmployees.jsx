import React, {useState, useEffect} from 'react';
import AdditionForm from './AdditionForm';
import Employees from './Employees';

const PageEmployees = () => {
   const [employees, setEmployees] = useState([]);

   useEffect(() => {
      fetchGetData('https://reqres.in/api/users?per_page=12', successCallback, errorCallback);
   }, []);

   async function fetchGetData(url, successCallback, errorCallback) {
      const response = await fetch(url, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
      });
      const resultJson = await response.json();
      if (response.status === 200) {
        successCallback(resultJson);
        return;
      }
      errorCallback(resultJson);
   }

   const successCallback = (result) => {
      console.log(result);
      setEmployees(result.data)
   };
  
   const errorCallback = (result) => {
      console.log(result);
   };

   function addItem(firstName, lastName) {
      const newEmployee = {
         id: new Date(),
         first_name: firstName,
         last_name: lastName
      }
      const newEmployeesList = [...employees];
      newEmployeesList.push(newEmployee);
      console.log(newEmployeesList)
      setEmployees(newEmployeesList)
   }

   const removeItem = id => {
      setEmployees(employees.filter(item => item.id !== id))
   }


   return (
      <div className="container">
         <h1>Сотрудники</h1>
         <AdditionForm add={addItem}/>
         <Employees employees={employees} remove={removeItem}/>
      </div>
   )
}

export default PageEmployees;
