import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Blog from "./components/Blog";
// import Navbar from "./components/Navbar";
// import Topics from "./components/Topics";
import Home from "./productRouting/Home";
import Category from "./productRouting/Category";
import Products from "./productRouting/Products";
import Navbar from './productRouting/Navbar'
function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          {/* <Route path="/" component={Home}/> 
          <Route path="/about" component={About} />
          <Route path="/about" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/articles" component={Topics}/>
        </Switch>
      </BrowserRouter> */}

      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category">
          <Category />
        </Route>
        <Route path="/category">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
