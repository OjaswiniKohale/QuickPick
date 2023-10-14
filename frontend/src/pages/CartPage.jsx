import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import  getProductsFunction  from "../assets/products";
const PRODUCTS = getProductsFunction();
import { useNavigate } from "react-router-dom";
import { CartItem1 } from "../components/CartItem1";
import "../styles/cart.css";
import CartItem from "../components/CartItem";

const navigate = useNavigate();

export const CartPage = ({ currentCart }) => {
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="row">
        {currentCart.map((product, index) => (
          <div className="col-md-3 mt-5" key={index}>
            <CartItem
              price={product.price}
              name={product.name}
              img={product.img}
              quantity={product.quantity}
            />
          </div>
        ))}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default CartPage;
