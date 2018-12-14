import React from 'react';
import './UserInput.scss';

const UserInput = (props) => {
  const handleChange = event => props.handleChange(props.id, event.target.value);
  
  return (
    <div>
      <input id={props.id} type="text" onChange={handleChange} value={props.username} className='form-control'/>
    </div>
  );
};

export default UserInput;