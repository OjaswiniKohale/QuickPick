// import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// import "../styles/cart.css";
// import CartItem from "../components/CartItem";

// // const navigate = useNavigate();

// export const CartPage = ({ currentCart, makeCart }) => {
//   const updateQuantity = (name, newQuantity) => {
//     const updatedCart = currentCart.map((product) => {
//       if (product.name === name) {
//         return {
//           ...product,
//           quantity: newQuantity, // Update the quantity
//         };
//       }
//       return product;
//     });
//     makeCart(updatedCart);
//   };

//   const removeFromCart = (name) => {
//     const existingProduct = currentCart.find(
//       (product) => product.name === name,
//     );
//     let updatedCart;
//     if (existingProduct) {
//       updatedCart = [...currentCart];

//       updatedCart = updatedCart.filter(
//         (item) => item.name !== existingProduct.name,
//       );
//       makeCart(updatedCart);
//     }
//   };
//   return (
//     <div className="cart ">
//       <div>
//         <h1>Your Cart Items</h1>
//       </div>
//       <div className="container ml-3">
//         <div className="row">
//           {currentCart.map((product, index) => (
//             <div
//               className={`col-md-${
//                 currentCart.length < 3 ? 6 : currentCart.length === 3 ? 4 : 3
//               } mt-5 `}
//               key={index}
//             >
//               <CartItem
//                 price={product.price}
//                 name={product.name}
//                 img={product.img}
//                 quantity={product.quantity}
//                 setQuantity={updateQuantity}
//                 removeFromCart={removeFromCart}
//               />
//             </div>
//           ))}
//         </div>
//       </div>


//     </div>
//   );
// };

// export default CartPage;
import React, { useState } from "react";
import "../styles/cart.css";
import CartItem from "../components/CartItem";

export const CartPage = ({ currentCart, makeCart }) => {
  const updateQuantity = (name, newQuantity) => {
       const updatedCart = currentCart.map((product) => {
      if (product.name === name) {
        return {
          ...product,
          quantity: newQuantity, // Update the quantity
        };
      }
      return product;
    });
    makeCart(updatedCart);
  };

  const removeFromCart = (name) => {
        const existingProduct = currentCart.find(
      (product) => product.name === name,
    );
    let updatedCart;
    if (existingProduct) {
      updatedCart = [...currentCart];

      updatedCart = updatedCart.filter(
        (item) => item.name !== existingProduct.name,
      );
      makeCart(updatedCart);
    }
  };

  // Calculate the total cost
  const calculateTotalCost = () => {
    let totalCost = 0;
    for (const product of currentCart) {
      totalCost += product.quantity * product.price;
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
          {currentCart.map((product, index) => (
            <div
              className={`col-md-${
                currentCart.length < 3 ? 6 : currentCart.length === 3 ? 4 : 3
              } mt-5 `}
              key={index}
            >
              <CartItem
                price={product.price}
                name={product.name}
                img={product.img}
                quantity={product.quantity}
                setQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="total-cost">
        Total Cost: ${calculateTotalCost().toFixed(2)}
      </div>
    </div>
  );
};

export default CartPage;

