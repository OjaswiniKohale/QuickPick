import React from "react";
import { useState } from "react";
const CartItem = (props) => {
  const { name, price, img, quantity, setQuantity, removeFromCart } = props;
  const total = (quantity * price).toFixed(2);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    console.log(quantity);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      quantity--;
    }
  };

  return (
    <div
      className="card border border-3 rounded"
      style={{ width: "18rem", height: "100%" }}
    >
      <img
        src={img}
        className="card-img-top"
        alt={name}
        style={{ maxHeight: "150px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text text-muted">Rs.{price} per item</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="d-flex justify-content-between align-items-center">
            <span>Quantity:&nbsp;&nbsp;</span>
            <div className="input-group">
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="input-group-text">{quantity}</span>
              <button
                className="btn btn-outline-success btn-sm"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="d-flex justify-content-between align-items-center">
            <span>Total:</span>
            <strong>Rs.{total}</strong>
          </div>
        </li>
      </ul>
      <div className="card-footer d-flex justify-content-between">
        <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(name)}>
          Remove
        </button>
      </div>
    </div>
  );
};
export default CartItem;
