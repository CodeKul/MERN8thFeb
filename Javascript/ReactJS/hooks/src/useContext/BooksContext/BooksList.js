import React from "react";

function BooksList() {
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
