import React from "react";

function TableRow({ people }) {
  return (
    <tr>
      <td>{people.name}</td>
      <td>{people.id}</td>
    </tr>
  );
}

export default TableRow;
