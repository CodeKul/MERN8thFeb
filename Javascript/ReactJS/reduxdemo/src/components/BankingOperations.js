import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
function BankingOperations() {
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const handleDeposit = () => {
    dispatch({ type: "deposit", payload: Number(amount) });
  };
  const handleWithdraw = () => {
    dispatch({ type: "withdraw", payload: Number(amount) });
  };
  const handleInterest = () => {
    dispatch({ type: "interest" });
  };
  const handleDelete = () => {
    dispatch({ type: "delete" });
  };
  const handleAcctChange = () => {};
  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
      <button onClick={handleInterest}>Interest</button>
      <button onClick={handleDelete}>Delete Account</button>
      <button onClick={handleAcctChange}>Change Account Type</button>
    </div>
  );
}

export default BankingOperations;
