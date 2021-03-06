import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import FrontEnd from "./Blogs/FrontEnd";
function Blog() {
  const result = useRouteMatch()  //path,url
  console.log(result)
  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        <li>
          <Link to="/blog/frontend">FrontEnd</Link>
        </li>
        <li>
          <Link to="/blog/backend">BackEnd</Link>
        </li>
      </ul>

      <Route path="/blog/frontend" component={FrontEnd} />
    </div>
  );
}

export default Blog;
