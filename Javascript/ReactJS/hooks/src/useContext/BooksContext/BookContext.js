import { createContext, useContext, useState } from "react";
export const bookContext = useContext();
export function BooksProvider() {
  const [books, setBooks] = useState([
    {
      bookName: "ABC",
      price: 100,
    },
  ]);
  return (
    <bookContext.Provider value={books}>{props.children}</bookContext.Provider>
  );
}
