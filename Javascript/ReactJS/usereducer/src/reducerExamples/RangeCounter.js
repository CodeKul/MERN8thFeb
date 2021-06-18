import React, { useReducer } from "react";
function rangeReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ctr: state.ctr + state.incBy, incBy: state.incBy };
    case "decrement":
      return { ctr: state.ctr - state.incBy, incBy: state.incBy };
    case "update":
      return { ctr: state.ctr, incBy: action.payload };
    default:
      return state;
  }
}
function RangeCounter() {
  const [count, dispatch] = useReducer(rangeReducer, {
    ctr: 0,
    incBy: 1,
  });
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleRangeInput = (e) => {
    dispatch({ type: "update", payload: Number(e.target.value) });
  };
  return (
    <div>
      <p>{count.incBy}</p>
      <input
        type="range"
        min="1"
        max="10"
        value={count.incBy}
        onChange={handleRangeInput}
      />
      <p>{count.ctr}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default RangeCounter;
