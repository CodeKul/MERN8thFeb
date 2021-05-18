import React from "react";

function Logout(props) {
  return (
    <div>
      <button onClick={props.displayLogout}>Logout</button>
    </div>
  );
}

export default Logout;
