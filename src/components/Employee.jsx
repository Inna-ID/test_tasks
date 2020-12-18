import React from 'react';

const Employee = ({employee, remove}) => {
   const removeHandler = (id) => {
      remove(id);
   }

   return (
      <li>
         {employee.first_name} {employee.last_name}
         <button onClick={() => removeHandler(employee.id)}>Удалить</button>
      </li>
   )
}

export default Employee;
