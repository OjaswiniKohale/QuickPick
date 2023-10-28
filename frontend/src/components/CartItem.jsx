import React from "react";
import { useState } from "react";
import axios from "axios";

const CartItem = (props) => {
  const { pid, name, price, img, quantity, refresh, setRefresh } = props;
  const total =  (price).toFixed(2);
  
  const increaseQuantity = async() => {
    try{
      const response = await axios.post("/api/v1/updateQuantity",{
        pid : pid,
        increaseQuantity: true,
        unitPrice : price/quantity,
      })
      if(response.data.message==="Successfully Updated Quantity")
      {
        setRefresh(refresh ? false : true);
      } else if (response.data.message === "Quantity issue") {
        console.log("Cannot increase or decrease quantity beyond this point")
      }
    }
    catch(error)
    {
      console.log("Error: ",error)
    }
   
  };

  const decreaseQuantity = async() => {
    if (quantity > 1) {
      try{
        const response = await axios.post("/api/v1/updateQuantity",{
          pid : pid,
          increaseQuantity: false,
          unitPrice : price/quantity,
        })
        if(response.data.message==="Successfully Updated Quantity")
        {
          setRefresh(refresh ? false : true);
        }
      }
      catch(error)
      {
        console.log("Error: ",error)
      }
      
    }
  };

  const removeFromCart = async() =>{
    try{
      const response = await axios.post("/api/v1/removeFromCart",{
        pid : pid
      })
      if(response.data.message==="Successfully Deleted")
      {
        console.log(refresh)
        setRefresh(refresh ? false : true);
      }
    }
    catch(error)
    {
      console.log("Error: ",error)
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
        <p className="card-text text-muted">Rs.{price/quantity} per item</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="d-flex justify-content-between align-items-center">
            <span>Quantity:&nbsp;&nbsp;</span>
            <div className="input-group">
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => decreaseQuantity()}
              >
                -
              </button>
              <span className="input-group-text">{quantity}</span>
              <button
                className="btn btn-outline-success btn-sm"
                onClick={() => increaseQuantity()}
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
        <button
          className="btn btn-danger btn-sm"
          onClick={() => removeFromCart(name)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default CartItem;

