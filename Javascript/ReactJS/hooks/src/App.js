import logo from "./logo.svg";
import "./App.css";
import CovidCount from "./useEffect/CovidCount";
import RefComponent from "./useRef/RefComponent";
import StopWatch from "./useRef/StopWatch";
import Registration from "./Forms/Registration";
import NewForm from "./Forms/NewForm";
import InlineStyle from "./Styling/InlineStyle";
import StyledComponent from "./Styling/StyledComponent";
import ExternalCSS from "./Styling/ExternalCSS";
import ExternalCSS2 from "./Styling/ExternalCSS2";

function App() {
  return (
    <div>
      {/* <CovidCount/> */}
      {/* <RefComponent/> */}
      {/* <StopWatch/> */}

      {/* <Registration/> */}
      {/* <NewForm/> */}

      {/* <InlineStyle/> */}

      <StyledComponent />
      <ExternalCSS />
      <ExternalCSS2 />
    </div>
  );
}

export default App;
