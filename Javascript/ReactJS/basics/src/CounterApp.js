import { useState } from "react";

function CounterApp() {
  const [count,setCount] = useState(0);

//   useState returns an array of 2 elements - 1) initial value 2) function
  const incrementCounter=()=>{
      setCount(count+1)
  }
  return (
    <div>
      <h1>Hello Counter</h1>
      <p>{count}</p>
      <button type="button" onClick={incrementCounter}>Increase Counter</button>
    </div>
  );
}
export default CounterApp;
