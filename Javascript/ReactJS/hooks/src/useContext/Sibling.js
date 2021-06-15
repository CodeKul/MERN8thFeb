import React, { useContext } from "react";
import MyContext from "./MyContext";

function Sibling() {
  const result = useContext(MyContext);
  return (
    <div>
      <h1>Sibling</h1>
      <p>{result.textValue}</p>
      <p>{result.x}</p>
    </div>
  );
}

export default Sibling;
