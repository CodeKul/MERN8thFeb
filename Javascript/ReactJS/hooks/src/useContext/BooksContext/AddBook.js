import React, { useState, useContext } from "react";
import { bookContext } from "./BookContext";

function AddBook() {
  const [book, setBookName] = useState("");
  const [price, setPrice] = useState(0);
  const [books, setBooks] = useContext(bookContext);
  const handleName = (e) => {
    setBookName(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const addNewBook = () => {
    setBooks((prevBook) => [...prevBook, { bookName: book, price: price }]);
  };
  return (
    <div>
      <input type="text" value={book} onChange={handleName} />
      <input type="text" value={price} onChange={handlePrice} />
      <button type="button" onClick={addNewBook}>
        Add Book
      </button>
    </div>
  );
}

export default AddBook;
