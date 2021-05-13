import React from "react";
class TableBody extends React.Component {
  render() {
      console.log(this.props.tableData)
    return (
      <>
          
        {this.props.tableData.map((item, id) => (
          <tr>
            <td>{item.productName}</td>
            <td>{item.productQty}</td>
            <td>{item.productPrice}</td>
          </tr>
        ))}
      </>
    );
  }
}

export default TableBody
