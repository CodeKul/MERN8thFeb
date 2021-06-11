import React from "react";
import { useHistory } from "react-router-dom";
function Winner() {
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };
  return (
    <div>
      <h1>You guessed right!!!</h1>
      <button type="button" onClick={handleBack}>
        Back
      </button>
    </div>
  );
}

export default Winner;
