import React, {useState} from 'react';

const AdditionForm = ({add}) => {
   const[firstName, setFirstName] = useState('');
   const[lastName, setLastName] = useState('');

   const addHandler = e => {
      e.preventDefault();
      if(firstName && lastName) {
         add(firstName, lastName);
         setFirstName('');
         setLastName('');
      }
   }

   return (
      <div className="form-wrapper">
      <h3>Добавить нового сотрудника</h3>
         <form >
            <input type="text" placeholder="Имя" value={firstName} onChange={e => setFirstName(e.target.value)}/>
            <input type="text" placeholder="Фамилия" value={lastName} onChange={e => setLastName(e.target.value)}/>
            <button onClick={addHandler}>Добавить</button>
         </form>
      </div>
   )
}

export default AdditionForm;
