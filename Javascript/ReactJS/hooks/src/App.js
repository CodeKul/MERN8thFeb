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
import Table from "./ReactFragment/Table";
import MyContext from "./useContext/MyContext";
import Child from "./useContext/Child";
import Sibling from "./useContext/Sibling";
import BooksList from "./useContext/BooksContext/BooksList";
import Navbar from "./useContext/BooksContext/Navbar";
import AddBook from "./useContext/BooksContext/AddBook";
import {
  BooksProvider,
  bookContext,
} from "./useContext/BooksContext/BookContext";
const data = {
  x: 10,
  textValue: "ABC",
  fun: () => {
    alert("Hello");
  },
};
function App() {
  return (
    <div>
      {/* <CovidCount/> */}
      {/* <RefComponent/> */}
      {/* <StopWatch/> */}

      {/* <Registration/> */}
      {/* <NewForm/> */}

      {/* <InlineStyle/> */}
      {/* <StyledComponent />
      <ExternalCSS />
      <ExternalCSS2 /> */}

      {/* <MyContext.Provider value={data}>
        <Child />
        <Sibling />
      </MyContext.Provider> */}
      {/* <BooksProvider>
        <Navbar />
        <AddBook />
        <BooksList />
      </BooksProvider> */}

      <Table/>
    </div>
  );
}

export default App;
