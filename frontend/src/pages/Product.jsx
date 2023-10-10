// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import styled from "styled-components";
// import API from "../components/ProductPage/mockAPI";
// import { ListedItems } from "../components/ProductPage/ListedItems";
// import { FixedCart } from "../components/ProductPage/FixedCart";
// import { CartDetails } from "../components/ProductPage/CartDetails";
// import { Overlay } from "../components/ProductPage/Overlay";
// import { GlobalStyles, lightGray } from "../components/ProductPage/GlobalStyles";

// function Products() {
//   const [cart, setCart] = useState([]);
//   const [items, setItems] = useState(API);
//   const [cartOpen, isCartOpen] = useState(false);

//   const addToCart = i => {
//     setItems(state =>
//       state.map((item, p) => {
//         if (i === p) {
//           setCart([
//             ...cart,
//             { name: item.name, price: item.price, quantity: item.quantity }
//           ]);
//           return { ...item, inCart: true };
//         }
//         return item;
//       })
//     );
//   };

//   const increaseQuantity = {
//     inCart: i => {
//       setCart(state =>
//         state.map((item, o) => {
//           if (i === o && item.quantity < 10) {
//             return { ...item, quantity: item.quantity + 1 };
//           }
//           return item;
//         })
//       );
//     },
//     inItems: i => {
//       setItems(state =>
//         state.map((item, o) => {
//           if (o === i && item.quantity < 10) {
//             return { ...item, quantity: item.quantity + 1 };
//           }
//           return item;
//         })
//       );
//     }
//   };

//   const decreaseQuantity = {
//     inCart: i => {
//       setCart(prevCart =>
//         prevCart.map((item, o) => {
//           if (i === o && item.quantity > 1) {
//             return { ...item, quantity: item.quantity - 1 };
//           }
//           return item;
//         })
//       );
//     },
//     inItems: i => {
//       setItems(state =>
//         state.map((item, o) => {
//           if (i === o && item.quantity > 1) {
//             return { ...item, quantity: item.quantity - 1 };
//           }
//           return item;
//         })
//       );
//     }
//   };

//   const removeFromCart = i => {
//     let chosenItem, index;
//     index = 0;
//     while (index < cart.length) {
//       if (index === i) {
//         chosenItem = cart[index].name;
//         break;
//       }
//       index++;
//     }
//     setCart(state => state.filter(item => chosenItem !== item.name));
//     setItems(state =>
//       state.map(item => {
//         if (item.name === chosenItem) {
//           return { ...item, inCart: false, quantity: 1 };
//         }
//         return item;
//       })
//     );
//   };

//   const cartCountTotal = cart.reduce((acc, item) => acc + item.quantity, 0);

//   return (
//     <>
//       <GlobalStyles />
//       <CartDetails
//         open={cartOpen}
//         onClose={() => isCartOpen(false)}
//         cart={cart}
//         increaseQ={increaseQuantity.inCart}
//         decreaseQ={decreaseQuantity.inCart}
//         cartCountTotal={cartCountTotal}
//         removeFromCart={removeFromCart}
//       />

//       <FixedCart onOpen={() => isCartOpen(true)} cartItems={cartCountTotal} />
//       <Overlay onClick={() => isCartOpen(false)} open={cartOpen} />

//       <Wrapper>
//         <H1>Shopping Cart App</H1>
//         <ListedItems
//           items={items}
//           increaseCount={increaseQuantity.inItems}
//           decreaseCount={decreaseQuantity.inItems}
//           addToCart={addToCart}
//         />
//       </Wrapper>
//     </>
//   );
// }

// const Wrapper = styled.div`
//   padding: 75px 0;
//   display: flex;
//   flex-flow: column;
//   align-items: center;
// `;
// const H1 = styled.h1`
//   padding: 0 10px 50px 10px;
//   text-align: center;
//   color: ${lightGray};
// `;

// export default Products;
import React from 'react';
import Cart from '../components/Cart';


const Product = () => {

  const fruits=[
    "https://tse4.mm.bing.net/th?id=OIP.IXKCpF-CG8jGSmOdUoYKIQHaEK&pid=Api&P=0&h=180", 
    "https://tse1.mm.bing.net/th?id=OIP.S0MwlWV6Tgy2br4GfBaJcgHaE6&pid=Api&P=0&h=180",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1aXqHdPUhiGbV6IpAjNQWfago64IWwCZqlA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcPhPFg7QhdbFjttG9SNME-uHndIPW2Y40Zw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNw11AtnkYWJNc3efgIMjnzsXPAB19qAP_w&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2dQwLWdyqVnvijep83uzmRoX-FGXO_9SUcw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXdJPRyEebLRiUikB5x9hw-AwOYdNLUaKeA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Q4uIH9CEAuEL80813qdvOdWUGUzbpbYMxQ&usqp=CAU"
  ]

  const vegetables =[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGRv2MZNE1IHOovltlxkw6gSUDGfBV8spalw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHlE72HwnX2MLLVaN-pu9c7FmJbXV23cv9g&usqp=CAU",
    "https://www.nutritionfact.in/wp-content/uploads/2023/05/Ladies-Finger.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC7KiwyXsuatUij3b0HeQ9SHmEshhkCeXSnQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOlYw2zxaNolhltDbhHmmJiFPckqc0rPzTrw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4oLcSs5YVJ-OEE7Piq_6fiiMXyg4CLIkObQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsOC5aQWdC0S3_H8nWyGGcSWDXb-aOhO09Og&usqp=CAU"
  ]



  
  return (
    <div className='container mt-5'>
      <h1 className='text-center mb-4'>Product Page</h1>
      <div className='row'>
        <div className='col-md-3'>
          <Cart price={30} name="Banana" img="https://tse4.mm.bing.net/th?id=OIP.IXKCpF-CG8jGSmOdUoYKIQHaEK&pid=Api&P=0&h=180" />
        </div>
        <div className='col-md-3'>
          <Cart price={20} name="Grapes" img="https://tse1.mm.bing.net/th?id=OIP.S0MwlWV6Tgy2br4GfBaJcgHaE6&pid=Api&P=0&h=180" />
        </div>
        <div className='col-md-3'>
          <Cart price={100} name="Apples" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1aXqHdPUhiGbV6IpAjNQWfago64IWwCZqlA&usqp=CAU" />
        </div>
        <div className='col-md-3'>
          <Cart price={100} name="Oranges" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcPhPFg7QhdbFjttG9SNME-uHndIPW2Y40Zw&usqp=CAU" />
        </div>
        <div className='col-md-3 mt-5'>
          <Cart price={100} name="Pineapple" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNw11AtnkYWJNc3efgIMjnzsXPAB19qAP_w&usqp=CAU"/>
        </div>
        <div className='col-md-3 mt-5'>
          <Cart price={100} name="Guava" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2dQwLWdyqVnvijep83uzmRoX-FGXO_9SUcw&usqp=CAU"/>
        </div>
        <div className='col-md-3 mt-5'>
          <Cart price={100} name="Mangoes" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXdJPRyEebLRiUikB5x9hw-AwOYdNLUaKeA&usqp=CAU"/>
        </div>
        <div className='col-md-3 mt-5'>
          <Cart price={100} name="Strawberries" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Q4uIH9CEAuEL80813qdvOdWUGUzbpbYMxQ&usqp=CAU"/>
        </div>
      </div>
    </div>
  );
}

export default Product;
