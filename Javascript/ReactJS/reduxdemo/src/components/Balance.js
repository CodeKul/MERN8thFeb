import React from "react";
import { useSelector } from "react-redux";

function Balance() {
  const store = useSelector((state) => state);

  return (
    <div>
      <h1>{store.balance}</h1>
    </div>
  );
}

export default Balance;
