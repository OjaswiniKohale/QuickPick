import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import CartItem from "../components/CartItem";
import axios from "axios";
import {Link} from 'react-router-dom'
export const CartPage = ({ currentCart, makeCart }) => {
  const [cart, setCart] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetchCart();
  },[refresh]);

  const fetchCart = async () => {
    try {
      const response = await axios.get("/api/v1/getCart");
      console.log(response.data.cartProducts);
      if (response.data.cartProducts) {
        setCart(response.data.cartProducts);
      }
    } catch (error) {
      // Todo
      console.log(error);
    }
  };

  // Calculate the total cost
  const calculateTotalCost = () => {
    let totalCost = 0;
    for (const product of cart) {
      totalCost += product.total_price;
    }
    return totalCost;
  };

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="container ml-3">
        <div className="row">
          {cart.map((product, index) => (
            <div
              className={`col-md-${
                cart.length < 3 ? 6 : cart.length === 3 ? 4 : 3
              } mt-5 `}
              key={index}
            >
              <CartItem
                pid={product.product_id}
                price={product.total_price}
                name={product.name}
                img={product.image_url}
                quantity={product.quantity}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="total-cost">
        Total Cost: Rs.{calculateTotalCost().toFixed(2)}
      </div>
      <Link to='/checkout'>
      <div>
            <button className="btn btn-primary mt-4">
              Checkout
            </button>
      </div>
      </Link>
    </div>
  );
};

export default CartPage;
