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
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsOC5aQWdC0S3_H8nWyGGcSWDXb-aOhO09Og&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJIMJGJA3ZQ2oveGs0z1hquI_Q87x4anyWQ&usqp=CAU"
  ]

const snacks=[
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBtI_OFRR6BCr02XPAw25P-GpbzCSsbHOf_w&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKrPcx8FJ3qyKJ8kmSTVK3YaLCaXvkUmKE8g&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82MKjFVD-3AbBiqjyEvcWtBso2DSSBurtVQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUih5ltcKB09rRsyCPA0TQg4aXoMyXfRWiuw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkSL8bkSQzXQaYs3yqtdq5J3JuyItAq9k0jQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBtI_OFRR6BCr02XPAw25P-GpbzCSsbHOf_w&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMKK04OST8DPRGoF0JLEM6W1QeNRZTHU60bqwJ_da5cusdW53aatgpfAS_oJrPphKukqU&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvNmhh8-_fSaOPRMWjB9V0hIgb-np1n3eleQ&usqp=CAU"
]

const cookies=[
  "https://www.bigbasket.com/media/uploads/p/l/286082_12-sunfeast-dark-fantasy-choco-fills-biscuits-cookies.jpg?tr=w-640,q=80",
  "https://m.media-amazon.com/images/I/61Xj1A6WCTL._SL1500_.jpg",
  "https://m.media-amazon.com/images/I/61EP5COKj4L.jpg",
  "https://5.imimg.com/data5/UX/SO/HC/SELLER-16537610/priyagold-cheese-cracker-biscuits.jpg",
  "https://www.jiomart.com/images/product/original/491587134/britannia-milk-bikis-biscuits-500-g-product-images-o491587134-p491587134-0-202203170354.jpg?im=Resize=(1000,1000)",
  "https://www.bigbasket.com/media/uploads/p/l/40086304-2_6-britannia-nutrichoice-digestive-zero-high-fibre-biscuits.jpg",
  "https://5.imimg.com/data5/SELLER/Default/2023/3/291829697/UT/JE/CF/51126755/britannia-bourbon-biscuit.jpg",
  "https://www.jiomart.com/images/product/original/491539619/parle-g-original-glucose-biscuits-100-g-product-images-o491539619-p491539619-0-202301131722.jpg?im=Resize=(1000,1000)"
]
  

const sweets=[
  "https://m.media-amazon.com/images/I/81JugTbWdzL.jpg",
  "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/images/products/sliding_image/11022b.jpg?ts=1688807689",
  "https://www.bigbasket.com/media/uploads/p/xl/40122230_9-nestle-kitkat-crispy-wafer-bar.jpg",
  "https://5.imimg.com/data5/SELLER/Default/2022/4/BX/LT/MY/5116174/nastle-maha-munch-chocolate.jpg",
  "https://www.haldirams.com/media/catalog/product/cache/71134970afb779eb7860339989626b7e/r/a/rasgulla_6.jpg",
  "https://www.haldirams.com/media/catalog/product/cache/71134970afb779eb7860339989626b7e/g/j/gj-500g-front-1v1.jpg",
  "https://baazwsh.com/cdn/shop/products/besan-ladoo-400g-haldirams-baazwsh-763272.jpg?v=1665488010",
  "https://www.haldirams.com/media/catalog/product/cache/71134970afb779eb7860339989626b7e/m/i/milk_cake.jpg"
]

const cleaners=[
  "https://5.imimg.com/data5/SELLER/Default/2021/7/IO/JV/SW/59620849/61lonlblx1l-sl1000--500x500.jpg",
  "https://cdn01.pharmeasy.in/dam/products_otc/S29945/lizol-lavender-disinfectant-floor-cleaner-liquid-bottle-of-500-ml-2-1670493093.jpg",
  "https://www.bigbasket.com/media/uploads/p/l/40192803_1-surf-excel-quick-wash-detergent-powder.jpg",
  "https://familyneeds.co.in/cdn/shop/products/1_54789f6c-4710-4f16-b0db-a520ecd01310_600x600.jpg?v=1598646838",
  "https://m.media-amazon.com/images/I/61o5c4JhzTL.jpg",
  "https://www.netmeds.com/images/product-v1/600x600/410290/dettol_liquid_handwash_original_200_ml_52183_0_1.jpg",
  "https://ml0co0iaphua.i.optimole.com/w:1000/h:1000/q:mauto/f:avif/https://gharstuff.com/wp-content/uploads/2018/11/Tide-Plus-Extra-Power-Jasmine-Rose-Detergent-Powder-500g-2.jpg",
  "https://www.bigbasket.com/media/uploads/p/l/40173107_5-bb-home-naphthalene-balls.jpg"
]

const beverages=[
  "https://5.imimg.com/data5/FW/XJ/VA/SELLER-30759087/real-mixed-fruit-juice.jpg",
  "https://www.justgotochef.com/uploads/1538570082-Tropicana-Orange%20%20Juice-Front.jpg",
  "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/images/products/sliding_image/20143a.jpg?ts=1687525090",
  "https://img5.hkrtcdn.com/17188/prd_1718784-Alo-Frut-Mixed-Fruit-Aloevera-Juice-1-L-Mixed-Fruit_o.jpg",
  "https://www.hi5mart.com/image/cache/catalog/DRINKS%20AND%20BEVERAGES/Coca%20Cola/Coca%20Cola%20Soft%20Drink,%20750%20ml%20Bottle-750x750.jpg",
  "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/images/products/sliding_image/312a.jpg?ts=1678183838",
  "https://images-eu.ssl-images-amazon.com/images/I/51C8U7H-+6L._AC_UL330_SR330,330_.jpg",
  "https://www.bigbasket.com/media/uploads/p/l/20003889_3-godrej-jersey-flavoured-milk-pista.jpg"
]

const fresheners=[
  "https://www.princeofficesolutions.com/media/catalog/product/cache/5aaeaba771243db0eb99143619c69cf0/p/o/pos547_1.png",
  "https://sindirasupermarket.com/wp-content/uploads/2020/11/aer1-300x300.jpg",
  "https://www.laverretail.com/wp-content/uploads/2023/05/GN.jpg",
  "https://5.imimg.com/data5/NE/JP/MY-23387521/odonil-toilet-air-freshener.jpg"
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
