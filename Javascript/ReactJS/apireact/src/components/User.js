import React, { useEffect, useState } from "react";
import ApiCalls from "../ApiCalls";
export default function User() {
  const [users, setUsers] = useState([]);
  const [userDetails, setDetails] = useState({
    name: "",
    job: "",
  });
  const handleInputChange = (e) => {
    setDetails({ ...userDetails, [e.target.name]: e.target.value });
    console.log(userDetails);
  };

  const handleClick = (e) => {
    e.preventDefault();
    // const options = {
    //   method: "POST",
    //   headers: { "Content-type": "application/json" },
    //   body: JSON.stringify(userDetails),
    // };
    // fetch("https://reqres.in/api/users", options)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((errMsg) => {
    //     console.log(errMsg);
    //   });

    ApiCalls.post("/api/users", userDetails).then((res) => {
      console.log(res);
    });
  };
  useEffect(() => {
    // fetch("https://reqres.in/api/users")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((output) => {
    //     setUsers(output.data);
    //     console.log(users);
    //   });

    //Axios
    // axios.get("api/users").then((response) => {
    //   setUsers(response.data.data);
    //   console.log(users);
    // });

    ApiCalls.get("/api/users").then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          value={userDetails.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          value={userDetails.job}
          name="job"
          onChange={handleInputChange}
        />
        <button onClick={handleClick}>Create</button>
      </form>
      <hr />
      <div className="row">
        {users.map((user, id) => (
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" key={id}>
            <img src={user.avatar} />
            <p>{user.email}</p>
            <p>{user.first_name}</p>
            <p>{user.last_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
