import React, { useState } from "react";

function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  let show
  const handleFirstName = (e) => {
    console.log(e.target.value);
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const displayInfo = () => {
   show={
       firstName:firstName,
       lastName:lastName
   }
   
   console.log(show)
  };
  return (
    <div>
      {/* firstName,lastName */}
      <label htmlFor="FirstName">Firstname</label>
      <input type="text" value={firstName} onChange={handleFirstName} />
     
      <label htmlFor="LastName">Lastname</label>
      <input type="text" value={lastName} onChange={handleLastName} />
      
      <button onClick={displayInfo}>Display</button>
       
    </div>
  );
}

export default Registration;
