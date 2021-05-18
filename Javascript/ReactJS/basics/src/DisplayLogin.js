import React from "react";
import Guest from "./Guest";
import User from "./User";

function DisplayLogin(props) {
  //   if (props.isLoggedIn) {
  //     return <User />;
  //   } else {
  //     return null;
  //   }

  return <div>{props.isLoggedIn ? <User /> : <Guest />}</div>;
}
export default DisplayLogin;
