import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const cardTotalRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      cardTotalRef.current.style.display = "table-row";
    } else {
      cardTotalRef.current.style.display = "none";
    }
  });

  return (
    <table className="text-left table-auto border-separate border-spacing-x-5 ">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr key={item.id}>
                <td>{product.title.substring(0, 10)}...</td>
                <td>${product.price.toLocaleString("en-US", { styles: "currency", currency: "USD" })}</td>
                <td className="text-center">{item.qty}</td>
                <td>{(product.price * item.qty).toLocaleString("en-US", { style: "currency", currency: "USD" })}</td>
              </tr>
            );
          })}
        {/* useState */}
        <tr ref={cardTotalRef}>
          <td colSpan={3}>
            <b>Total Price</b>
          </td>
          <td>
            <b>${totalPrice.toLocaleString("en-US", { styles: "currency", currency: "USD" })}</b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
