import { createContext, useState } from "react";
export const BooksContext = createContext();
//Provider - state
//BookContext - Provider ,Consumer
export function BookProvider(props) {
  const [books, setBooks] = useState([]);
  return (
    <BooksContext.Provider value={[books, setBooks]}>
      {props.children}
    </BooksContext.Provider>
  );
}
