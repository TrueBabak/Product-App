import React from "react";
import Products from "../Components/Products";

const App = () => {
  const productslist = [
    { name: "react", price: "100$" },
    { name: "vue", price: "200$" },
    { name: "angular", price: "300$" },
  ];
  return (
    <div>
      product list
      {productslist.map((products) => {
        return <Products name={products.name} price={products.price} />;
      })}
    </div>
  );
};

export default App;
