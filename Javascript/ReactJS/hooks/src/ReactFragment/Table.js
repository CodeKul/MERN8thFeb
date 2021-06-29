import React from "react";
import TableRow from "./TableRow";
function Table() {
  let people = [
    {
      name: "abc",
      id: 10,
      city: "pune",
    },
    {
      name: "xyz",
      id: 12,
      city: "mumbai",
    },
    {
      name: "qwe",
      id: 11,
      city: "thane",
    },
  ];
  return (
    <>
      <table>
        {people.map((person, id) => (
          <React.Fragment key={id}>
            <TableRow people={person} />
          </React.Fragment>
        ))}
      </table>
    </>
  );
}

export default Table;
