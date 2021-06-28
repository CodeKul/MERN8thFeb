import { createContext, useState } from "react";
export const bookContext = createContext();
export function BooksProvider(props) {
  const [books, setBooks] = useState([
    {
      bookName: "ABC",
      price: 100,
    },

    {
      bookName: "XYZ",
      price: 900,
    },
  ]);
  return (
    <bookContext.Provider value={[books, setBooks]}>
      {props.children}
    </bookContext.Provider>
  );
}
