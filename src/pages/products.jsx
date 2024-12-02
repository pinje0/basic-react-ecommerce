/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../Components/Fragments/CardProduct";
import Button from "../Components/Elements/Button";
import getProducts from "../services/products.service";
import { getUsername } from "../services/auth.service";
// import Counter from "../Components/Fragments/Counter";

// const products = [
//   {
//     id: 1,
//     name: "Katana 1",
//     price: 1000000,
//     image: "/images/katana1.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium nihil reprehenderit aliquid cum eum voluptatum dolore dolorem quibusdam qui quis sint magnam ratione, non nesciunt expedita laudantium veritatis velit`,
//   },
//   {
//     id: 2,
//     name: "Katana 2",
//     price: 500000,
//     image: "/images/katana1.jpg",
//     description: `Lorem ipsum dolor sit amet aliquid cum eum voluptatum dolore dolorem quibusdam qui quis sint magnam ratione, non nesciunt expedita laudantium veritatis velit`,
//   },
//   {
//     id: 3,
//     name: "Katana 3",
//     price: 300000,
//     image: "/images/katana1.jpg",
//     description: `quibusdam qui quis sint magnam ratione, non nesciunt expedita laudantium veritatis velit`,
//   },
// ];

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  // useRef
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart"))) || [];

  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };

  const cardTotalRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      cardTotalRef.current.style.display = "table-row";
    } else {
      cardTotalRef.current.style.display = "none";
    }
  });

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-primary text-white items-center px-10">
        {username}
        <Button classname="bg-red-600 ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap ml-3">
          {products.length > 0 &&
            products.map((product) => {
              return (
                <CardProduct key={product.id}>
                  <CardProduct.Header image={product.image} />
                  <CardProduct.Body name={product.title}>{product.description}</CardProduct.Body>
                  <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart} />
                </CardProduct>
              );
            })}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-emerald-600 ml-5 mb-2">Cart</h1>
          {/* <ul>
            using "()" after => to return the jsx
            {cart.map((item) => (
              <li key={item}>{item.id}</li>
            ))}

            using "{}" after => need return statement
            {cart.map((item) => {
              return <li key={item.name}>{item.name}</li>;
            })}
          </ul> */}
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
                      <td>
                        {(product.price * item.qty).toLocaleString("en-US", { style: "currency", currency: "USD" })}
                      </td>
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
        </div>
      </div>
      {/* <Counter></Counter> */}
    </Fragment>
  );
};

export default ProductsPage;
