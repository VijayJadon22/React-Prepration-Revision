import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice.js";

const Product = (props) => {
  const dispatch = useDispatch();
  return (
    <div
      className="card"
      style={{ width: "18rem", margin: "10px", border: "1px solid grey" }}
    >
      <img className="card-img-top" src={props.image} alt={props.productName} />
      <div className="card-body">
        <h5 className="card-title">{props.productName}</h5>
        <p className="card-text">Rs. {props.price}/-</p>
        <button
          onClick={() => dispatch(addItem(props))}
          className="btn btn-primary"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
