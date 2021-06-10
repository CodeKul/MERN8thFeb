import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <ul style={{ display: "flex", listStyle: "none" }}>
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cat" className="nav-link">
            Category
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="nav-link">
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
