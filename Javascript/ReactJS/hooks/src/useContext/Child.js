import React, { useContext } from "react";
import MyContext from "./MyContext";
import GrandChild from "./GrandChild";
function Child() {
  const result = useContext(MyContext);
  return (
    <div>
      <h1>Child</h1>
      <p>{result.x}</p>
      <p>{result.textValue}</p>
      <p>{result.fun()}</p>
      <GrandChild />
    </div>
  );
}

export default Child;
