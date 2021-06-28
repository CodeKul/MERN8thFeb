import React from "react";
import { useSelector } from "react-redux";

function Balance() {
  const bal = useSelector((state) => state.banking);
  //console.log(balance);
  return (
    <div>
      <h1>{bal.balance}</h1>
    </div>
  );
}

export default Balance;
