import React, { useEffect, useRef } from "react";

function RefComponent() {
  const refVar = useRef(0); //returns a object {current:0}
  useEffect(() => {
    console.log("Render");
  });

  const handleClick = () => {
    refVar.current.focus();
    refVar.current.style.backgroundColor = "lightblue";
  };

  

  return (
    <div>
      <input type="text" ref={refVar} />
      <button onClick={handleClick}>Focus Input</button>
      
    </div>
  );
}

export default RefComponent;
//it returns an object with the property current {current:0}

//1)Accessing DOM
//2)persists value of ref throughout rerendering
//3)updating a ref will not rerender a component
