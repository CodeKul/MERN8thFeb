import React from "react";
import TableBody from "./TableBody";
class ClassExample extends React.Component {
  render() {
    let products = [
      {
        productName: "Mouse",
        productQty: 10,
        productPrice: 800,
      },
      {
        productName: "Keyboard",
        productQty: 1,
        productPrice: 1250,
      },
      {
        productName: "Stylus",
        productQty: 5,
        productPrice: 1000,
      },
      {
        productName: "charger",
        productQty: 5,
        productPrice: 1000,
      },
      {
        productName: "headphones",
        productQty: 5,
        productPrice: 1000,
      },
    ];
    console.log(this.props)
    return (
      <div>
        <h2>{this.props.title}</h2>
        <h6>{this.props.num}</h6>
        <table style={{ border: "1px solid black" }}>
          <tr>
            <th>Product Name</th>
            <th>Produce Quantity</th>
            <th>Product Price</th>
          </tr>
          {/* {products.map((item, id) => (
            <tr>
              <td>{item.productName}</td>
              <td>{item.productQty}</td>
              <td>{item.productPrice}</td>
            </tr>
          ))} */}
          <TableBody tableData={products} />
        </table>
      </div>
    );
  }
}

export default ClassExample;
