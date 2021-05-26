import React, { useEffect, useState } from "react";

function EffectComponent() {
  const [seeEffect, setEffect] = useState(0);
  const [userSelect, setSelect] = useState("users");
  useEffect(() => {
    console.log("Inside useEffect");
    fetch(`https://jsonplaceholder.typicode.com/${userSelect}`).then(
      (response) => {
        console.log(response.json());
      }
    );
  },[userSelect]);

  const handleUsers = () => {
    setSelect("users");
  };

  const handleAlbums = () => {
    setSelect("albums");
  };
  const increment = () => {
    setEffect(seeEffect + 1);
  };
  return (
    <div>
      <p>{userSelect}</p>
      <button onClick={handleUsers}>Get Users</button>
      <button onClick={handleAlbums}>Get Albums</button>

      <p>{seeEffect}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default EffectComponent;
