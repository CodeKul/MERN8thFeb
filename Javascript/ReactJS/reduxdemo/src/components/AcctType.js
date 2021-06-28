import React from "react";
import { useDispatch, useSelector } from "react-redux";
function AcctType() {
  const dispatch = useDispatch();
  const acctType = useSelector((state) => state.banking);
  console.log(acctType);
  const handleSaving = () => {
    dispatch({ type: "change-saving" });
  };
  const handleCurrent = () => {
    dispatch({ type: "change-current" });
  };
  return (
    <div>
      {acctType.isCurrent && <button onClick={handleSaving}>Savings</button>}
      {acctType.isSavings && <button onClick={handleCurrent}>Current</button>}
    </div>
  );
}

export default AcctType;
