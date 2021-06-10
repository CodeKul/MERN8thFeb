import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import BookReview from "./BookReview";
function Books() {
  const { path, url } = useRouteMatch();
  
  let bookReview = [
    {
      id: 1,
      bookName: "Javascript learning : Review",
      reviewComments:
        "JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user.",
    },
    {
      id: 2,
      bookName: "Learn React JS : Review",
      reviewComments:
        "React makes use of the ever popular HTML and Javascript frameworks by integrating them together. Extend the two technologies onto CSS facilitates the designing of advanced looking web-interfaces. React is a very API friendly library and is extensible across a multitude of frameworks.",
    },
    {
      id: 3,
      bookName: "CSS in depth : Review",
      reviewComments:
        "What is CSS? CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers. CSS is independent of HTML and can be used with any XML-based markup language.",
    },
  ];
  return (
    <div>
      <h1>Books</h1>
      <ul>
        
        {bookReview.map((book) => (
          <li>
            <Link to={`${url}/${book.id}`}>{book.bookName}</Link>
          </li>
        ))}
      </ul>

      <Route path={`${path}/:bookid`}>
        <BookReview bookInfo={bookReview}/>
      </Route>
    </div>
  );
}

export default Books;
