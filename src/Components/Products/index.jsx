import React from "react";

const Products = ({ name, price }) => {
  return (
    <div>
      <div>product cource: {name}</div>
      <div>product sale: {price}</div>
    </div>
  );
};

export default Products;
