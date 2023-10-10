import React, {useContext} from "react";
import {CartItem} from "../components/CartItem";
import "../styles/cart.css"
const PRODUCTS=[
    "https://tse4.mm.bing.net/th?id=OIP.IXKCpF-CG8jGSmOdUoYKIQHaEK&pid=Api&P=0&h=180", 
    "https://tse1.mm.bing.net/th?id=OIP.S0MwlWV6Tgy2br4GfBaJcgHaE6&pid=Api&P=0&h=180",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1aXqHdPUhiGbV6IpAjNQWfago64IWwCZqlA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcPhPFg7QhdbFjttG9SNME-uHndIPW2Y40Zw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNw11AtnkYWJNc3efgIMjnzsXPAB19qAP_w&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2dQwLWdyqVnvijep83uzmRoX-FGXO_9SUcw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfXdJPRyEebLRiUikB5x9hw-AwOYdNLUaKeA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Q4uIH9CEAuEL80813qdvOdWUGUzbpbYMxQ&usqp=CAU"
  ]

  export const Cart = () => {


    return (
        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product,index) => {
                    
                        return <CartItem data={product} key={index}/>; 
                                    })}
            </div>
        </div>
    )
  }

export default Cart;