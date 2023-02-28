import React from "react";

const Products = ({ name, price }) => {
  return (
    <div className="">
      <div>product cource: {name}</div>
      <div>product sale: {price}</div>
    </div>
  );
};

export default Products;
