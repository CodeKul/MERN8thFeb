import React, { useState } from "react";
import { useHistory } from "react-router-dom";
function Game() {
  const [guess, setGuess] = useState("");
  const history = useHistory();
  console.log(history);
  const handleGuess = (e) => {
    setGuess(e.target.value);
  };

  const handleClick = () => {
    if (guess === "React") {
      history.push("/winner");
    }
  };
  return (
    <div>
      <input type="text" value={guess} onChange={handleGuess} />
      <button type="button" onClick={handleClick}>
        Submit Answer
      </button>
    </div>
  );
}

export default Game;
