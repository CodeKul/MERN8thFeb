import React from "react";
import Guest from "./Guest";
import User from "./User";

function DisplayLogin(props) {
  //   if (props.isLoggedIn) {
  //     return <User />;
  //   } else {
  //     return null;
  //   }

  return <div>{props.loginValue ? <User /> : <Guest />}</div>;
}
export default DisplayLogin;
