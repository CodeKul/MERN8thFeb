import React, { useReducer } from "react";
function countReducer(state, action) {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}
function CounterReducer() {
  const [count, dispatch] = useReducer(countReducer, 0);
  const handleIncrement = () => {
    dispatch("increment");
  };
  const handleDecrement = () => {
    dispatch("decrement");
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default CounterReducer;
