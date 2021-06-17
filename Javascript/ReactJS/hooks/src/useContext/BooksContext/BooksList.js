import React, { useContext } from "react";
import { bookContext } from "./BookContext";

function BooksList() {
  const [books,setBooks] = useContext(bookContext);

  return (
    <div>
      {books.map((book, id) => (
        <div>
          <p>
            {book.bookName}
            <span>{book.price}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default BooksList;
