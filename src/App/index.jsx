import React, { useState } from "react";
import Products from "../Components/Products";

const App = () => {
  const [Product, setProduct] = useState([
    { name: "react", price: "100$" },
    { name: "vue", price: "200$" },
    { name: "angular", price: "300$" },
  ]);
  const productHandler = () => {
    setProduct([
      { name: "react", price: "15$" },
      { name: "vue", price: "27$" },
      { name: "angular", price: "39$" },
    ]);
  };
  return (
    <div className="">
      product list
      {Product.map((products) => {
        return <Products name={products.name} price={products.price} />;
      })}
      <button onClick={productHandler}>Set Products</button>
    </div>
  );
};

export default App;
