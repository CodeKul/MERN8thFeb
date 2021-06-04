import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className="nav-link">
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
