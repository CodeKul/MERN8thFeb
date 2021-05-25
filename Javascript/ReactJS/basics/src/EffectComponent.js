import React, { useEffect, useState } from "react";

function EffectComponent() {
  const [display, setDisplay] = useState(0);
  const[nodisplay,setNoDisplay]=useState(0)
  const[loading,setLoading]=useState(false)
  useEffect(() => {
    console.log("render");
  },[display]);
  return (
    <div>
        {display}
      <button
        type="button"
        onClick={() => setDisplay((display) => display + 1)}
      >
        Click Me
      </button>
        <br/>
        {nodisplay}
      <button
        type="button"
        onClick={() => setNoDisplay((nodisplay) => nodisplay + 1)}
      >
        Click Me
      </button>
    </div>
  );
}

export default EffectComponent;
