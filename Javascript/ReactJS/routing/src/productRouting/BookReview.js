import React from "react";
import { useParams } from "react-router";

function BookReview({ bookInfo }) {
  console.log(bookInfo);

  const { bookid } = useParams();
  console.log(bookid);

  const bookDetails = bookInfo.find((b) => b.id === bookid);
  console.log(bookDetails);
  return (
    <div>
      <h1>Book Review</h1>
      <p>{bookInfo.bookName}</p>
      <p>{bookInfo.reviewComments}</p>
    </div>
  );
}

export default BookReview;
