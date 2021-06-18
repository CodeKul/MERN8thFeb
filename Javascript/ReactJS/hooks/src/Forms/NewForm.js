import React, { useState } from "react";
// firstName,lastname,gender,checkbox-Do you agree,textarea-message,select-city
function NewForm() {
  const [myInfo, setInfo] = useState({
    firstName: "",
    lastName: "",
    message: "",
    city: "",
    gender: "",
    isChecked: false,
  });

  const handleInputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    console.log(e.target.checked);
    setInfo({
      ...myInfo,
      [e.target.name]: value,
    });
  };

  
  return (
    <div>
      <h1>React Form Example</h1>
      <form>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          name="firstName"
          value={myInfo.firstName}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          value={myInfo.lastName}
          name="lastName"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="msg">Message</label>
        <br />
        <br />
        <textarea
          name="message"
          value={myInfo.message}
          onChange={handleInputChange}
        ></textarea>
        <br />
        <br />
        <label htmlFor="gender">Gender</label>
        <br />
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          checked={myInfo.gender === "male"}
          onChange={handleInputChange}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={myInfo.gender === "female"}
          onChange={handleInputChange}
        />
        <label htmlFor="female">Female</label>
        <br />
        <br />
        <label htmlFor="city">Select city</label>
        <select name="city" value={myInfo.city} onChange={handleInputChange}>
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Banglore">Banglore</option>
        </select>
        <br />
        <br />
        <label htmlFor="agree">Do you agree</label>
        <input
          type="checkbox"
          name="isChecked"
          value="true"
          checked={myInfo.isChecked}
          onChange={handleInputChange}
        />
        <br />
        <br />
      </form>

      <div>
        <ul>
          <li>FirstName : {myInfo.firstName}</li>
          <li>LastName : {myInfo.lastName}</li>
          <li>Message : {myInfo.message}</li>
          <li>Gender : {myInfo.gender}</li>
          <li>City : {myInfo.city}</li>
          <li>isChecked : {myInfo.isChecked}</li>
        </ul>
      </div>
    </div>
  );
}

export default NewForm;
