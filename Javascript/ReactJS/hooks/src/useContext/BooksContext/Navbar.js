import React, { useContext } from "react";
import { bookContext } from "./BookContext";

function Navbar() {
  const [books, setBooks] = useContext(bookContext);

  return (
    <div>
      <ul
        style={{
          backgroundColor: "lightseagreen",
          color: "white",
          display: "flex",
          listStyle: "none",
          justifyContent: "space-around",
          alignItems: "center",
          height: "45px",
        }}
      >
        <li>Books</li>
        <li>Number of Books : {books.length}</li>
      </ul>
    </div>
  );
}

export default Navbar;
