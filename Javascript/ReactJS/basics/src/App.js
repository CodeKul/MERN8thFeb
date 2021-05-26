import "./App.css";
import ClassExample from "./ClassExample";
import FunctionExample from "./FunctionExample";
import Counter from "./Counter.js";
import Clock from "./Clock";
import DisplayLogin from "./DisplayLogin";
import HandleLogin from "./HandleLogin";
import CourseDetails from "./CourseDetails";
import KnowMore from "./KnowMore";
import CounterApp from "./CounterApp";
import EffectComponent from "./EffectComponent";
function App() {
  // let tableTitle = "Products Table"
  let x = 100;
  let element = (
    <div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium ad
        cumque recusandae, deserunt saepe placeat assumenda quis culpa quaerat
        architecto et non! Id cumque repellat iste repellendus ut. Repellendus,
        rem.
      </p>
    </div>
  );
  const loginValue = true;
  return (
    <div>
      <h1 className="text-center">React App</h1>
      {/* <ClassExample title="Products Table" num={x} />
      <br /> */}
      {/* <FunctionExample /> */}
      {/* {element}
      <Counter />
      <Clock /> */}

      {/* <DisplayLogin loginValue={loginValue} />
      <HandleLogin />

      <CourseDetails /> */}

      {/* <KnowMore/> */}

      {/* <CounterApp/> */}
     <EffectComponent/>
    </div>
  );
}
//JSX
export default App;
