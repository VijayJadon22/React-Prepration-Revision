import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const total = products?.reduce((total, item) => (total += item.price), 0);
  return (
    <div className="alert alert-success">
      <h3 className="text-center">
        Total Items: {products.length} (Rs. {total})/-
      </h3>
    </div>
  );
};

export default Cart;
