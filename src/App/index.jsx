import React from "react";
import Products from "../Components/Products";

const App = () => {
  return (
    <div>
      product list
      <Products name="reactjs" price="100$" />
      <Products name="vuejs" price="200$" />
      <Products name="angular.js" price="300$" />
    </div>
  );
};

export default App;
