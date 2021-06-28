import AcctType from "./components/AcctType";
import BankingOperations from "./components/BankingOperations";
import Balance from "./components/Balance";
import Login from "./components/Login";
function App() {
  return (
    <div>
      <Login/>
      <Balance />
      <BankingOperations />
      <AcctType />
    </div>
  );
}

export default App;
