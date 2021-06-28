import React from "react";
import { useDispatch, useSelector } from "react-redux";
function Login() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authentication);
  return (
    <div>
      <button onClick={() => dispatch({ type: "check-auth" })}>
        {auth.isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Login;
