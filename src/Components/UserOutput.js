import React from 'react';

const UserOutput = (props) => {
  return(
    <div>
      <p>This is the first paragraph for {props.username}</p>
      <p>And this is the second paragraph for {props.username}</p>
    </div>
  );
};

export default UserOutput;