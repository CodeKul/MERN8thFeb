import "./FunctionExample.css";
function FunctionExample() {
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
  return (
    <div>
      <table class="functionTable">
        <tr>
          <th class="heading">Product Name</th>
          <th>Product Qty</th>
          <th>Product Price</th>
        </tr>
        {products.map((product, id) => (
          <tr>
            <td>{product.productName}</td>
            <td>{product.productQty}</td>
            <td>{product.productPrice}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default FunctionExample;
