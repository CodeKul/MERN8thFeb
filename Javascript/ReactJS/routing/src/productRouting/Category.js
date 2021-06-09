import React from "react";
import {Link,Route} from 'react-router-dom'
import Books from "./Books";
function Category() {
  return (
    <div>
      <h1> Category</h1>
      <ul>
        <li>
          <Link to="/category/books">Books</Link>
        </li>
        <li>
          <Link to="/category/software">Software</Link>
        </li>
        <li>
          <Link to="/category/electronics">Electronics</Link>
        </li>
      </ul>

      <Route path="/category/books" component={Books}/>
    </div>
  );
}

export default Category;
