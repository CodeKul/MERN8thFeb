import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import Books from "./Books";
function Category() {
  const { path, url } = useRouteMatch();
  
  return (
    <div>
      <h1> Category</h1>
      <ul>
        <li>
          <Link to={`${url}/books`}>Books</Link>
        </li>
        <li>
          <Link to={`${url}/software`}>Software</Link>
        </li>
        <li>
          <Link to={`${url}/electronics`}>Electronics</Link>
        </li>
      </ul>

      <Route path={`${path}/books`} component={Books} />
    </div>
  );
}

export default Category;
