import React from 'react';
import Employee from './Employee';

const Employees = ({employees, remove}) => {
   return (
      <ul className="employees-list">
         {employees.map((item, index) => (
            <Employee employee={item} key={index} remove={remove}/>
         ))}
      </ul>
   )
}

export default Employees;
