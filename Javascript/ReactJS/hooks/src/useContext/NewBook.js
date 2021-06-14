import React, { useState, useContext } from "react";
import { BooksContext } from "./BooksContext";
function NewBook() {
  const [bookName, setBookName] = useState("");
  const [price, setPrice] = useState(0);
  const [books, setBooks] = useContext(BooksContext);
  const getBookName = (e) => {
    setBookName(e.target.value);
  };

  const getBookPrice = (e) => {
    setPrice(e.target.value);
  };

  const addNewBook = () => {
    setBooks((prev) => [...prev, { bookName: bookName, price: price }]);
    console.log(books);
  };
  return (
    <div>
      <label htmlFor="bookname">Enter book name</label>
      <input type="text" value={bookName} onChange={getBookName} />
      <label htmlFor="bookprice">Enter book price</label>
      <input type="text" value={price} onChange={getBookPrice} />
      <button type="button" onClick={addNewBook}>
        Add Book
      </button>

      {books.map((book) => (
        <div>
          <p>{book.bookName}</p>
          <p>{book.price}</p>
        </div>
      ))}
    </div>
  );
}

export default NewBook;
