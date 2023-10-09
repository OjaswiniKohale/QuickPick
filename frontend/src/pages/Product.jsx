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
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUYGBcZGiMaGxoaGxwgIhwcISMaGSIiHRwaHywkGyAoIRoaJDUlKC0vMjIyICI4PTgwPCwxMi8BCwsLDw4PHRERHTEoIikxMTExMzE6MTExMTExMzExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIASwAqAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgABBwj/xABEEAACAQIDBAYGBgkDBQEBAAABAhEDIQASMQRBUWEFEyJxgZEGMqGxwdEHQlJykvAUI1NigrLC4fEWM6IVQ2PS4pNz/8QAGgEAAgMBAQAAAAAAAAAAAAAAAQMAAgQFBv/EAC0RAAIBAgUEAQMEAwEAAAAAAAABAgMRBBIUITEzQVFhsRMiMiOB4fBCcaGR/9oADAMBAAIRAxEAPwD6l0t0n1AXs5s074iI5c8Lj6UD9kfxD5Yt9Jv+3pqfhjN1F3Y59evOE3FM20aMJQTaHg9KwdKc/wAX9sef6uX9n/zHywhVQceOg4e35YVqqnkdpqfg0Q9Kh+yP4v7YkPSYfsm8/wC2Mox/N8cKkWsMDVVPPwTS0/Bq/wDU4/ZH8Q+WIn0o/wDEfxf2xmS4t8sSZltc+R/xgaur5+A6Wn4NF/qxf2Z8/wC2JD0qH7I/iHyxms44/nxxy1rwBHOZ9wwNXV8/BHhqfg0v+qP/ABH8X/zjv9U/+I/iHyxmyw3keeK5Xl7/AGxiaur5+Cump+DTn0rH7I/iHyx5/qwfsj+IfAYzTVbccQNTli2rqefgmmp+DVH0qH7I/iHyxE+lgH/aP4h8sZTOY+c/EYiTG4eH+MTVVPPwTT0/BqT6Yr+yP4h8sR/1kN1En+IfLGWZjGkd4xVnPhyXE1VTz8E01Pwa/wD1haeob8Q+WJD0wX9kfxD5Yx2c7/aI+GPHe1vz5YmqqeSaan4Po3QnTA2gMQuXLG8HWeHdjsKPQPSr3r/VjzHRoycoJsw1YqM2g70oaOrvFz8MZ6pWWPWGHnpdUdRTyAG5mTH2eWMtWr1f2afiPxXHNxT/AFH+xvw3TQSCN0eeOYW1wGtWtH+2p7nA/px5Tq1pjqR+Mf8ArjMaS51A/uPliDOvD2YHd69/1Kn+Mf8AqMVLX2n9iv8A+lz/AMcGwLhwfgPz5YmrtJ4eGPejOjtpqMDUpLSQ6kvLRyQD3xh3T2KmjNCPUYGCW9W3NoQeJJxf6UmxbrRQmoozns02b7onz4YKTopxdytMfvOP6ZwxfanNrKOCaR99sq+AzYr65FM6njJJ8YAU+3DFSguRcqknwVLslMa1Gb7lMnyaCDi+nsSSB1VQzaSVA9hxF+kFixI+7b3SMUf9TVTmmSL3IvF9wGC/pxV7FLyfcvqbKpZooIQGIH6yJgxoNMVPSQWNGmDw6z++Bk6XpMoLEGbkMZufvHFRrUDcUqRPHq1J92IsrRE2FbQaaCXpqoO/NUjzCxgWdnf1Sp+45Ov3lxYm3IuiKPuqF9wxNtrovapSVvvLm/mOBZFsxQvRSH1HvwYD3oT7sU7T0XVS2QPaewZiRNxr7MNKVPZzH1ByZgAO4HKMTroxZqiO3aabFSI3WOUaRvOJki9iZ3cyruwtkM8JuO8bsVs9TgPbjWMudYqdWx3Z1Kz56HmrRywh6T2TLZSKTn1RVk02P7tZRbuYTywHT8DFNdzR+gLMVrZhF19xx2KPo7pbQv6QNopqhlcpUyrCGuDocdjp0FaCRzK7vNse9PoTkiN+vhhM1OpxXzPyw86daAvj8MJiSdPecc7FdR/3sbsP00DikwvAP5+7icLF1GLkViYuTwwYlFFu8FuGsfM+zCoQzcDJTsCbPsha8BV4xr3Df34Mp0lUwolhrxHedF/NjijbNugS5yDcB67f+g/PLGb2/pxn7FMQvAWXxP1j3YalCG4pylI0O19L06dvXPL1fxb/AA9mEu09O1HY8DBXL3eY9gwmNMue2ZHDd5fOcG7NTAEEacRPkNPPCp1G3sXjT8np2iobkgd1z5i3tx64JFiSe+PdPsxciSCcsAbz8tB5Y9a4IE6c/j8MUbkNUYgP6Od4375/rbHVdngD1RPcOO9QeWJlR2tN3CfjidUCBF78Dx7u/BTIUIoH1vIt8RjzatqFMLAnM6gsZ7I00Ivr7MSR1SGckRu0J3cdMB7dtS1HSms9k9Y0kmNCB4mMBpmeddN5Y8hZYT63t+WKWYzH+fbB9uPVrc4jmf6h8cVo3MR3Eey4xeKHNouOhXM4BtBJ/rn2HBFPbaiRcMOPqnzuD54GUnd+fFbeYx5m3xHun+Hw1GDutwWTDth22qjMD2lZiQNLHcJs3gRhvSqo1vUP1lIsfvIfhhTs7giwHhEfLzjF4r3jSNxkR8V9oxZVPJHT8Gq9HNjWmKmSwYgwCco19UGy+EDljzFXopULCpJn1d33uFj3jHY6lD8Ec2svvYb039Xx3d2FVGmWMAez2zhx0tSLZQBx8NMCQKa5V8W3k93HgMYq0M1Rt8fwaqU7U0lyVVqopKct3tczqdLC99yi59oT9JdLQytlmoRBAggMN9tWjvA3TrijpTpGDlW7XHGJ1g7yd7b9BbVds6m5O/ed/wCeHnhFSdrKIyFPNuyjaXqVGOc66/3O/EhSgjKDe44ndoP7YOfZezJERvtfxNh+YxWWEZQOe+48btxkwMK3fI5WXBSKUamIvYj2seyvhJxcrKD2RrvjXzubcYGImkbZzEaKt2juA7I7o78ehxFhbjIPmx7M66ZjgojZeizrPhHviB4DHpVQd08//on3Yij77+0e038gBiD1huHfEgewR7cBolys1InhE2Dbu4AYoq7QIG9yYVTFv3muTA774g9QNmgAR9YiwFzOvxHjhftNQk5UAQSASwMuTrkTjAGvLTESMFfFf4x/9B+l9tCK1MPnc9ljrlXffiTJt3bsKuiNohnYkS0+sdwPM4M6aCUgKSqJs1TeZsQsgXMATzJwno2bL9YAbpie18Th8IpRM+H6iNENsXLuPGJ+GYYs2eopnLryvz+qSd3DCOrUKxMSdJhT4Z9cWo5N2JHetvO/sjFklY6Le48R50IJ5G/wb2YvpO28+Y+d8JFqEjWe45o8Gn4Ya7C7RvjuI5aSfZbFJJFosZ0zaYF94/N/HHjPv4bju95XjwxT1/D2QPboe4xiurUkwLEa7o8BdfaLaYW0MTNj6CvIqnmpgi+h3izd4x2IegB7NYnivubhbxGuOx1cN00c2v1GaPpGoQBG+cZLpvpPIMgPa07uP9z4cZd+le39TTB+sZAPDT23EY+fklzmJ/tu/PPkMZcTK0mPoxvEPp0JEmSTv333Afnid2CKagGwk6Dh3D4nAOzVcrCZjhy0177cScNi6etO7cNALd3du78YvZr9HoWe/wBg/PAeOBZymFiJ14nkbk9yhjzGLEckyfBdwG4czvM2xXtpYSTPDsjUcDEEgcJUX34IAarlWQ27WwtzIJyjjLljyxS9czeFOkkmeUSMxHcEXBlDo+pUMDsZRMncDpDRC/wjvxCn0KSxHWqu7sSWJ0ux+EYNmxcqsIvdgqbUqTnMDUZrkzf1Bv5mcDV9uCqalR4Q+qLS/wB0aAfnlhs3QlNWU5hGrAmSY1MxbfgTbtnp1HNQUczAHLMqI0gXg6jzwNlszBWruey4FNbbSyFMkgqCMn1Ps5p9+7liSstImpUI9XrAt5AtNiT6xgSToCd4w02qipkmipVoWQwjsnfB3X9uKD0NSqVKrVC1QaGXhVB+yEAJOggnhi0bGUxdfaw5lpVqhls2mVjIyiOWuKDtAeoT2bmII0i0XPLGx6T6N2URFJ1VLZxmzAjezNrYzfCpvRik8uNoZQb9pAbm1zOHxlCxenNRlcV7S6ggQRA+oU9qkkHwOPaLKLhyv3kZf+SWwTtHoztFMFkOYTYKxkjiAbeGKx0RtKier1E3yTb7rKfDF1lsbFWiy9CW0yP3Mre4q3vwyouyxIZYG4n44zgq3AZRykEaWPrqSfA4PoVs7WMHkR/7XwucTRCRojtMCTc7iYnz0P5tgfrJ58dRHKNU93LCurt3G66Zk+KmR4GMcm0E3BzcCtiB3G6+0csUyl8x9M+jx5FfhK+PrcLHHYG+i6rmWueae5vDyjux2Olh19iMFf8ANhvp9TzCjrq/9A8+GMrkjw4eX9h542Ppqsil3t7h+fE4yn5ka8JHmAOZGMGK6jNdD8ERGny/DI4b1H8R54rpVCDmmw3cT9UfHkBOpODaPR5cAsQqTci4JFoF7AC3dP2jjR7DslJIACkj6zEEzxtYeGENLuGpXjB27ijZ9kqVEUxlBuXa1tRAPHXxA4w0o9HU0ABHWHcWgAdw38Zwaag3uL8B85xW1Om2rlp4ndraAMVckuP+mSpXlPbgG22va11NoF5MkYDLkJlghplUFjbSw9xwwrJSEdvdlkxpygQMD1aZksHUEGfVlo4C8RhEpTb5RnaF4d4qLUADECwiAL3JHqnS+ljiivtDBAmQLIBEsIAFiZ1MyDzxBaZq1G/WH1ZOgkd1xOIVdpcFsjqSVCwwykRvBE68MLU32exUhXoVBTemyjsywZSBc6WnTXnbTHbVXY1KZp07j7WkjW+h03b8R2WmXBpqrZsy5jnJBWJixMCzXjfux51FZR/tjNTP6sZlsJaQe1JsdeeLJy7FQZ6pOZ6gZSbIstE3BupvEad+LxtLMpBRELAMbCXk2HiCLHFtHrM606VNg0Z3zb2IhoYmBqTb54q2nZXQlCVKk6Z+3ERFwB3cJwVKXa5COxqAyqypKszEFjuB+qDGX8xjzaNqysH6o2N3AJA0M29k4r6rsjNTa7yxYyFDWBJBkwDPG2LdqrrnKZiqaqVI7bWAve+pnliOo0yA217VSIkjMsWgzE6wGmDjzaadCpTCl8sL2TC9ldIsLjFo6tMpqLTzZiLKJBiAS3G3tJxEME7dSmgAkAZQSWgAE25+eLqs13CpNO6EW09AMTNCotS0wTDzyI3d84WbZstSkRnXKT9kiQdYIFp8sa1aiC+UrUEwyiCLmd3aMHUzj1jVg5XpsoYhWb1r3iwvh8MSnyOjiJLkdfQ/XLptMkGGS+/R9cdg/wCjZFA2gikKZZkJgzJhpMAnLebWx5jr0GnBMLlmdxx6UsP1YO/NJ/dGUnzsMZnaKMXHfbiPleOZGNH6Wn/a7yfLKfKYxnarXAOkSfd8/PHOxN/qP9vg6GH6aAOsamBGpvHiNBzMKMNdj6XUnI5CkDf6toEydBmkAmZjngOqAROhmBG4xJP8IMDmcKtrpFZtvBjdI/207hGduSjCHZ7MlSlGXJt0Ck3SCbHhl8NRj10IIBuoM/KCPljD7B0xUpQJzqTox3XBYHVSTnbhC403R/TFOrTD02Ol0YXG7T2SMKnSsrmKpTcT1lElmsQLADQDQyd2B3VTLssOFlctpB32uMGDakYguCoJK847o0NsUbfsisxyvu3gGxjy0xiVNu9hDFcBD27ZNSs9skxBPGPA4BqqQ7kFoIJXNIAMiIERvIjTBLvLHNDjNNrRu7o08sdTqZkKkZgA1o9W4gA7wdfZgrgWVnaqlFWZSDfISATnmDf7MX88BF2gsO0TBg5gY4wdQPliVCqtMmIzESc4jLawBblOm+MWPXzEM5cgSsqsA04EWPOPLDGvRCVEVA80mNlzKbgMP4rRpgSttTVnLBe2R6oJ1HAx3+WLF2k1FzZiOrACwCMyiFObdwnzxN9oem7VAoVRbKolbi/aG8WvGIl2aIe7KyoUas56vSAxlTp2huGI7ZtVIMUSlTIGm+3vGuBqgC55AdmsSFJgayDF5+GLK1dMt8h6qIzLDONBI5fLFldcEJU3pzmZCq2DQWuOF/8AOD+ladIMoUDKQGFzHjMg+OF6tJ6sVJUKYNzJnQDxjFtJFcjNmWmoMrvECN/ONMBScWQsWsi0xC5qhJCkgMoB3KBbzwFmzAygIUycoyEd8W88RqAU20MMAUObTfMcIxGq8ZkLZy2kCcxvw1xZO5DcfRrUJWvqAGWFNyB29+++OxH6M6eVa8zMpMgiLNa+saY7HoML0kNjwNvS5gOqnSWnu7M+zGXZ8x1Ex7Tf3uPLGl9MgT1QBi7eZKKP5sY9CTcbu1PeBE+BGMGK6j/vY2U6koQva6Pdt2oqVhZiSBNzcRyGk3OFtfaHJOgABN5NmjUqIzSDpNhGHb9JooVWkwNRFj3aHwwtqbd+s9fMNcrQCIvadThd4IzSxE5PkVbS6hSS2ebQim0hVvIsIt3E4nsmzKr5jUyVEyoMoJiTNgIaSWM234v6SPW5cuSQVkB5zXjeL7vO04l+iGmR1rZVGVVJBKkjNrkItJm4nFlJNFHUm+WE/wDVsqnrKqmTlVyuUDLqNIseHtwY1BqlIBSKkXBQ2nWSYk+/GUBTrGWpDqtWYBOQIQQY3KZvflzxZRIplmp1aqAaKLyQSSDlMEAEa4TOjFu6KjyqDlQGC5MMCCoAFpJtHHBuxbYKeUhJDyGURAIGo4ccY+p0xVKFjUU1AVgQCDMte+4ASBiadNVy5NUB1Q9pQYM2AOTXQ24xhTws+UAcbRXc1R2FN+zOjcACLHFu27VUZe2VUh8mUWjS5NxF8CVumKRN6gYrpI/2x90EQZ44DXpKk0B6oySAxA3gRJG9jIJwFSna1gWG36NSCMC5zj1gL2nUW92F9asmhdiNRAETv3fmMHbS60yrNUFQMLnNcrFhI+rocJdur0yGyrTDMRlg2UcOZm84EI72A0N36UORUCCmFsz+FpHEx7cLtorshV3IJPq77Ed9sU1NuuCIEgq5kEkbokQNwtgJK7O6pTBJzAwozFQIgye7QwMMjRuSxoAtNHRqrZAYbMIPa1HhgfbekKcgAu2XSCefDxwFt3RlZM7qyu8f7ZGgNzl3ZsBdGdB1mBeoRTS8km5PcPjGLRowy3cg2L26UAEhW0tLkW5XvihumTTgoFVtJBtfnphk3omAQwrlniwCyAI4Xws2f0OrPLPXROFixI47oGHwhRfLIrH0j6Idsaom05jOVkE7tH0x2LPoo6HbZl2gNUWpnKEECIADjTdjsdSjlyLLwOXA69Nm7NIDUlo74AH/ACK4yFRMxygxJMcRLLTXyAONh6Zi1Nvs5j5ZW/pGMqi5GEiyLmtwRD/W+OfiVebRuoL9MGbtAqxnWCbyMzAT35ScdseyuGVkytMggkXDcDEjQYErOFGvqj+RAP5qpxdQ2kgkG4Qa6m2RLcyzHyxmcH2M9XDWd4lI2YUyVKOik9sr2gy30AkDL8+OKK9M+pTYOkkK0scskEN2bSpBtGGI24ywAJAGhueFvl78ebPsFNWYioZYgjLEaSOyLnXceGF5zI0ItvoNlqQKZSVMh5JJ7LMp3gxcbjgvZNqFMQsEFczAwTaBNxvEACfq4LTot1bMnbQFiIMMDHHde8YCSogYdYpVoIc5fWDGTO6w32vGLOTsVLjQ2eu2SpSCOB2itgDfXja9pthN0v6NGmOsp1JANvZoZndhqNgQFXpuSpqR2T6qTlu3edMRrlqbAlSwUDrVYLYm3Z3Sb4sqslww3Mumw1nRiKeYkespIMSZnjc6nlgOvYBO2t5YNMG9r8hvxo2qmmxAQhlaWM3gyFt9adbcMV7RtQZSzKDJ7NtYmb6CBuw9Vmu1yXFVDpEhQCBUSLGBOlxMbhi1Og/0uqMiimi+ux3WmIG8zhyPRdXpdY4FOR2Z1ju540vRmwdXR6vqyqquZzImSbSZk2Hfik8RGP3Q2ZLmQpegoaqFFWEOsCDa8CbHGz2XYkooE2amAuhY7zpLE3bvwUSpZMkOggBiQApEct+mLUzVKgdcyIFkmBBgi0eeMdTEVKiSbCDpsyU2Z3Jeop3AnKtr+U688Xps4qZgoITNmaodG4CDr3DHtCvJqin23sSzEZQN3jrgHaelapp5gsqGya3LaHlEnC4O634JsEocztmKncDMALzi5Ps1xdTp0wkGrYGbDnMTqbW3YS9G0SQajAEqxBQtECDcjvxft1E5kqOaQVgJEmwOmYCMwHDEjdckNl6IVKZ63q9xWYEX7WOwH6AUwBXIywzLBURPrDTdjsegwfRQxcFnpzVCilmMDtz4BT7pxg9p6WK5jlaSIFoiStS86TpjW/SbRzrQgSQzQOM5BbHzxHLTLleAMXnW0a8sZq6vUY9VpU4JJF79IkxmUm4m26cxHjYeGPdm29DqbkqTf7LGo3mcuBqxJGUGCTF1FtO0GUe+NcdUQZL00JkgEakjdCz4HCdkDVy7oKqbaV7Shj6osRJy9ph4s8YsXpkNE9lxo0RuEnmJkeGEY2Vg8lmyhcxibEnS5gQQfLBZ2WnHWJXNh6pEGNdCO8+ODKEZLcrOpCfKNQm0jq+tVgZIzDcDcGy38sF1XpVF05CYJ+DeY3Y+aHpCpSqEKG3HMtrQAOR8cNtl9KQ1QPUEsFK6AaiLjTCZYacVePAhxXYaNRZM2SWJMmnBKssTMRa09rBFQOVpZVH60EFM12uT7reOJUukVZTUR1ZigBUgSu6wFjab4P6F2S4qEEU47JJ9YzAMHQWnGezezXBWwppU2/SwuRs7SgDXAEDVzJ0DeXPDWh0RSpvFOmHdTmZn4m3ZB+GGrpYMmXPntFyRugmIEA3xY2ymoirOQrcOxgi5uApvxnTE+o+IksDOnW1WpGmWghsxgBRw5aHFe17SiZqdMFqhuzTcxJi50AnDGs67NSb9YXYySTYmd5PdGEGwkKUrOrNUMs0g5SokgCBE6TO/XC5K2z/f9wDLoLZyULZ0AcZiALqSLXmJjlgOptlTN1FIhpBPAk8411xatIVnDCoaZqE9lIEBZktztgbYAFqCoJpIMyNV1DRpMm0xr88BeUH0S2bY2FKo2fI05TO9okiBMjSD34tXbVpilXYI0qEFJRdSbTzPfxOAKFdRUdlfMU7ahvVe8Gd0i0RgYo1Wp1kO7EgytgFsbE2zDTFooAZW2gM9SrWUWUKFmDvInKb7xhb1dV0zMjsoACyQI18xpGG+ybBTps1WsO1MqGaYED4zhZ0r06XqBQSlP6vPu4YZGO/kskbX6NkhKsgD1LA6WbXnjsDfRbTYLtM3BdSDx9c/GMe47uG6aGLgO9PdaHIsfJqTe4HHzjaaaguGiQzNTN9zMCpjjGPo/wBIFMlaJ5uv4kJHtUYxW0Ucz1AdJJnh2qLe52xkxHUZqUM9NI7ZHqCAJmOyISDpEn628bjbEkoU6zkuwRmEdkEAHg3A2nHmzOagNKxdWYAMDB7UwY0MrIPeMSo7MxpyAGBeWUm8+ItF9+Mc3ZowyTT3K+luiBTQsjh1IOYCLZo4ETynjgSlSWo/WVEFQFSqQMpMC/IsNDppg/ZhTghiQrAhXabjnuMacowL0bs6s70w5SL0yBfSPWJtPxwFO5W4l2GjWcOtNQQCIVtfDAH6JRyktmV1btSIE8BxiN+NBtGyugpsaZUITLKwBO+TPPXdhbKCSzzmqZmXUERIJMRIm/dh8JkuCdCdAV6tSVlU9c1CbZJGgF5I0GPq1JJBQEZNBl9aB2YiLXGuAPRzo5qVAJrUeWYmYWdB3KDEcZxPpfazSFOlSYjcWie8mNwwjEVMz34Ra+xbXqqtUKqF8gGZju3DWwuQMB7XUDVHeoZMlBTVojQ5iwOnLEi4prnIYuWANiQ+8E2/esuO2hhRrU+yxDAgZyAMzRfLuGuuMdyoPV2ZVR6jO9XqoPFSTJv3QBa8XwRsm0v1ZRAiypfOWtkJMBRqO7CraKrU6tQVCOr9ZlU2J0ImNY92Oej17s9OiQq2AnKsAgmSO4iwxZRbRCFDaGFOSVp9XMkC9QFiGI8pvyx7suxZkZTUZs2bKizJvqw0Hswy6N2Kn26leIzWUtmVYiD34R1drz7QOqBQKDLLrHGBr3YYosg72LojKgevUKk7rA5dwOA9v6aCr1dFLL5D5YC2isKjK6O7hTlYPJmbE5Ru58sBIwPWU1Q8CJMFiSAwjQDTDMtyyKqlfP2apbMwzTcBZ3Hf44ns1IKq54KqTFrkbiZ78WulOnBqN1lSLk/AYTbd0oalTJTEnTl+RhsU3tH+An1T6Mtq6wbRAspQDybHYp+ijZjTXaAxliyE+TaY8x1cOl9NDFwPvTAArTBH1ifcv9WMoVSbjVT4yvyTGv8AShQerB07XuB+E+GMk8kLbtC3ce0nkGInk2MWJ6jN9DpoV7WsHrKawyuxMcmmY3+sDie1aptKCQx7YvC2gmBv18DjyspUwLZ1zKDuYxAPLslfDFSbbkVwCMjQYPB5I7oIZPw4ztbCsTRTWZFmy7KtRIDZXuwiIKnT27sL6L+uhAzKczAGAQOB13gWvi+jUHVmpmMB4AA0JhTfgABbHuz7KSXNMgtmkZrEQfW5kcOYwm3o5rRZs/SHV9k08yC+UsS8G/EiQDcYnsPR1CtWWpTkU9SmknXLwiRJ7r4F2VXqZ0plczHK9yTJN25LGNNQ2daGzlKYzFAb2Ek3Zid18XUrK4Ue9I7V1dNlQzUIBgAnfG7mcDU0hOsl2JhDPZPrdpQp0kRimjVamFYAgtDSxvABzMw1yn6s2mNJxBlZmyoGdl/WWNmJIKg37IjhwxmneTDcu26sVdMxFNUcZaYAJH71ju54C2hy7MzZncgerBAQyDpYHBH6My1kqAF3iXzaKDzO/wCWAtj26KlQ3KEw2XSd0+7AUHcBPYNk6xGNQhU0gMBcWJyjeQBv8MT6R9IadGn1dK5Aif8AOEO37WXZVBhCZyAkTykGJ3RjymnVtUBKwRvExvgHGqMbK5ZIgiVm/WFCdCASYjU9nfOLP0gimCpCuhKkLYxzOhkYDf0kIIBMgCIXy7sLm2oFi4TKDvOvlvw1U34Dla5NJSpqbq+VeAb1vEATfCradsZS+R2KCJAg3udeMYCpIzpMvAUsIgwCYuDoMMP+lE9WuRQsjM6kgMOMcL4mWMHuwcAlFKlUyjkIdS028Ty4Yto7N1b5l9fed0cYw9qgf7NKAASGY6aceePdn2VKSzVmDYTfj7MKlW8AbNr9GtJwNoZzOZkg8QAw03Y7Fn0ePmFcj1cygDwb3yMdjrYRt0UMjwMvSw2pjeSYHE2EHkZy+OMltLH+BxIPARBnmF7f8JxqPTI2pjf2yPAKSO+JYfdxnWGdSLT668J+sO7NM8mAxnxC+9m+i/sQj24Myzo6Ge7McrW5VVVu58As06WDaTuFS4/DVUfiwz2mAbzDAhuMQFeeeTJU76ZwlrGDDGLlWPDMcrEdzgP4jCRoy6M2kBXRrUzcAarmGceRWoO9cDoesYqswqkICNeN+O+cd0fQqVXKqkkzmA0Fyxk7gKiVR3VBhylTZ9jgkCrXAMn6qm5JHA3iddNMUnCL/wBmKrSV9i/oivFJnNMK5sxiCQvfuNzzxX0iCLZv1jsGNNT2Qo+0x958sGjpWmwkPDOJy5JkxFiZHDGardJ00LSiOzm+YsxB4m2X2YztZnYzOI3apTzs7s1V2EFUBCwNxbf7uWBjt1RMxlKKDSBu99ufljO7TtbKxOXOTzIUdygbsCPVqOpF1MiQN4PM3w1QXYGyNd+kJdjXzZhMOJHgN2EVHbqdLOXVCCZBJg90aDCV3cBlJJgxlbWO/Am1bEUQPGZSZDX8iO/DIUU3uyXQd0p09TY5lQMi2hTE+zGf27b2qNbMq7lJ9+PXUZswHZabc8Ouiuh8oBYfrGjKrbh+d+NVqdJXtuWTS3BOiej5ILRO5SYmJJk7hbD7YqeZhIVw0B0UQVG4KTv0xM7GVakHUqmaNxlrgQBeJjBNfZiEFWSrNosXJEgkAaDljLUquRWUmyGy7E1QFUp6AqIMb5OeNR78Mdi6PqFerqgLTQEl53RYAbu7HuzbT1dKn2goIklQS0HUt9nv17sT2vb3qxTQZKZnLUNwYBNhv01OES3BcWbE4FWEHZB46kzG/XDSvDjNVZoEZTEAsNR3+/AlGmAEGzoXZiGkiSrDW+kWODRsqAs+01ApBkJqp8DqcJkrvYiRrPo2dSlbKsHMvl2o9x88djvo62lX/SMoGUMsRpo2nljsd3CdFDI8BXpwxAoxrmYjkezB7pMHvxl0rAQRMHtKN4icy94ANuNNeONL6eU5FGWAALTJ4hRFrmdPHGZpMm4FjOYFrdoBSYA0mM0TqpxkxE0qjXLN1F/YinbKTP6gzMbgajMskfwsC6k78x3DAb7DSTMa2ap2ZNNfsjsE1HHFQkgb0JnDeqWKkKYSPq9nlu3iPICNbBCjnjsrmQ+qLa+tImL624nXCG5P18jcrfIPtHSdRkyoFpp9mlrmkghmImfUOm/frhS9DM5mQpiwibcA27QXjfhyuwhDY3ETI3gASQd8Aa8NceUe1aoADwbTvD3IH3sw54tF5eC2SKWxOnsFJguSp1f3gR+EklZ7pws6a2BusYtAhcxN4bmBxJ3YcHZYuJWeJ17nBhvPwxPJIyuAVGoIEDvGg8VnElZ8CKlCMv8AZnU2a1OSRIlbjh7t2Kdto5kzAFaimDGk6Ty3YbbVsRDKabMchlV4b92vjGBtpc3e67oI39x4HCm7Mwzoyi9xVtdJ6YBc5leJPtnS+IdbGZSJpOZgCNLSBuwxNNnQM6ygAsCYvPtsMLq6X/VAkHsgG9zAjluxdSvsUse9C9EL1jPUjqlIYHidwGG1anAq1GpkzZLiFF+G+B7cNOoFOitMOA9MS1s0uR6vGIMRyGBaezMyBWU5Q/bSwkmS0RuEj3YFSTb3Ay7o3o7rQhqVDkC5UzCDmgzA3xxxTt6KAKVMs76FuA4AnT5486S2n9cqlIA7IS9h4ac43SMWpVYBYlVEgkKRADZwwza3t3HCWwAtFVX9WSerYnOFHaEAhcxHHW2uL9j2FmXM1Q00pyqKSAVEXBtO/wBuBv8AqLU0ek12qHMpjw3XmwwNttOUDsJUnKWzQrwImPO5wUm+QpFw2+oiMlIg08wj7ZJ1C7yP74ht20Ev1hEuhgUmMyCI1NydcV7ZtdMrTanAyzkWTmXXeBbkL4hncOjSDAkkrBJI1kb8XUe7CkfQ/orFTqqpcAAsCoG6c5M+Jx2O+jCtmXaO0Whkud1msMdjr4fpoZa2w49L9k61UANxmOX7QgT7N2sSd2MchAOU8r8wZU9+48xP1sb7p54CyOzJkj1lIghl5i5jeJ1iDluldgJHWJBMTbRgd68jw3G3A4y4iF5to3UJWiDJEEaK1xyPP88MQegQ2YX42tbjHqnnpiOzVlI1gjUHcdPDh5Y6ptRU7xFswi2+DNvA24EYy3NNgSuhqMZ7QG4yGXmCO0h5jMp5YkKB+rLb40bvtZ+8XwXVuAwAzD7NhPKf9tuRjx1xyJYnf3QQdO0nHW4gnniWADKIkA23xEHvBsfEeOPWqKBMafZB7Pcs5l/hMYKUjVrxaZ36esfEQwnngTaad7CYuQBcb5yyCB+8pwWiIhSqKSZIMmR6s6DSYB7iAe/DIbe2WCoiOFRfdK4EVSF9dkn95RPg4Ct7Di3q2ESFPNqZHf2kBX24CbXBLJka1Ki0jq4LXOVk9ylTv1wOmwUlYMqkBDZcpEtu1J9+7BLgMYCkjirq/wDxObluwo2+qVGVAVNyFjKxaQNANbndz3Yl/RlxEYRhdLcg9LOzixyuS9T5cWkgRywdU2pKIWEXrW0UASCePOcB7MjsFp01ACmSb66TPK/j3YDrbQuZ6ZYnM4/WCZldygXtrilmjnhdDY8rNUrMA4IMG4g7jBkHx4YK2zpxFBRaZNuAjzPjbCmsvWAmo/VoJgQJaTq08o54WbdXpArkJYr9ok2Gn+MSMXcMYN8IKVKjuZgZ5hyNInQa6zbHlWnRpAAk1PvaTvIGgwO231Klx6o/dgDyGKF2UTvknSDr3C/tGGZH32Rohh5Pkur7ZmI6sXUzAHv4YHqI9Qy7kz9VdO6d/cJwVs+zsTlCwuknLAPcOzPmcMNl6OgmSzE2Py3R4x3HF4qMTTClGPBsfoppZU2gQB2ksNdH1vry9gx2GH0e0Ci1gRF0geDfnQd2Ox0qD+xGWr+bHnTW0hMgYSrTPERlgjmDfCGuDQbN69FrsBfJP/cQDdHroN0kaEYZ+lX/AG77z/ThVse1hYVrp/LzHvxirTtUaf8AdjXRhemmgPpfocn9bSIkibGVYbvfZuBg4SbLWOaGBVxYqde4TYjgpt9kjTGwpqaV17dBrwt8s70A3cUHeu9cDdKdCpVTrEINpUrvnhx7jhcoq1y8Z22YmpsCZBg6cvu3HZ+4w5wdcWhvtDKYsdIHLUr3XXuwuao9M5KgJGmaLxwIMhhyPgd2D6VWFkEFT5DxN0N9/nphdrDeSys+U7+8axx5jTiOWPNkQarddbaDwMgfwkd2KiNRFgZAiY7wLg819uDdmMi2veD7TB84OIt3sRrY9qvcQYnW+WeNmBRj5YrRd+WN85SP+VIkezHFiWM5SQNJgndo0HUj60Yg1CL5COcEe1R72wbAKdpqE71e+hKPwX6wDj/OEgpySKhyKCQSouQJhVjTWfEYcu2a2YnT6wPPg0fiGEXSW0frCFkmDMc7SCO7fijbXBhxV20iraOlyUNPZ0K0we0x9Y7rndphWgFxTUMw1cwQt9FnXvwWOjqlRAGIRB9WRJ5mY1xYnR5iANPuH+XNhi9gpYdv8hX+jMTLMJ5snuvHli9NlMet5F/6VAw2TZCOWvEe8Lxxauyg7ye6/uzYOZI1xppbIW7DsuZiuYnu3d5Lz7BhhR6PVLQCGtuMnyy+BznF2zbOM4XLJ1gkD/hmk+Qw6ZIgZlTuu3gIt4zgZi1hYuyEQT2ZsNSx5KBePIcsX0EGUMqFYscwhoFpEWF74PSmdVGWbFzBY+Pw9mKhkQyL37TnQeJ9ZuCiT3Yo2WRpvQ1bVDETl/qx2JeiU/rZmZXX+LcLDuknjjsdXD9NHOr/AJs70vmKccTx/d4YzUscaf0sNqe65/pxmQ3jjn4rqP8AvY34Z/poK6P216Zg3Q6r8ueGuYuoallygksmkk6mdQ3A3HfMjPO3ECOeJU9qKmVJBHCB/nCoztzwWnBPdcjXaQlRTmU21t2l+8o3cxIO6cItp6MqU+3SIdDqAbEcBu8NOQw6p9IU6kCp2HGlRbR47vdj2tQdCXBsdXprmDf/ANKQ9b7yX7sN2kL3iI6FUEgEQRuPwvI8JGCtoq2gqWBG6G/4ndzBwWyJUALACbh6ZzoecgSvewgfawNtHR1QCRDqbgiL+B7LeBGKODW6LqafINQrKAYLQSBBLiDrowIFhxwSlQESp8h8aROBkDgcPEjw7Ujjoce12OXtKCOMab9RPDlil+5Z2sC9KbWZyqZdpi+i95/PngRaQQCRcm7Syk8zEjFFJg7u172EEGAP3bk792DBTggKyjvzIfDLAxI+RNKH+T5ZcqKBPbPdJ9oGKUUEmQ38SkfzP8MMUpOV3fz++MQpUKoa4t9ymB55icWHFVGiBEKNdwHd9UHhxxN6TFSD7dOG84KUGDLKP4p3jcI449bIpMsfBQv80DfxwNyCqoyqe2+UNuUZiY4BFJOvHfhrsSoF7KMOLOb+U27jflgDaqiRIDtBiAX7rimIO62bB3R/WEA5AoGggCO5VJjvLHuwUrgbsVbRXCkBpINhMweSr61TuAC8QNcW0tlZzvG6xvHCRZOELfngp0RGl2GYicou7DmB2svfAG/Ar9Kl+zSWBpm3dwYWc/u05++MW+nfkrm8Gu9HNlZFadDEdwkabseYH9FKTqrq7SZDRIkTOoHqzGnIySb47HSoK0Ejn1b52V+mRtS7z/TjMK2NP6ZG1LvP9OMo1ZRvE+H98YMT1Gb8N00TJP5/xiDT+f8AGIHah+f7Yj+kDS3n/fGceTzH8/4xds/SFSn6ptwOh8N3hgUV+eKy19RgptAavyaCh0hSqeuvVsbk7ieJPHmYI44P6tkV2pOrsw7CuYE2uaigkiJ9YMZi+MZUc8vz44nQ256d1cr3aeWL/UbVmLlT8GmO0GP1tBljUrDqP4qck+Cj34oq7LQqgqtQgkbj2vK8eOF1HpwH1xB+1TbKfw6Hxx1XpFmK5KtKopIzLXSGA4h0GU23ZfHDLxYtxaOpejRUZUq5hOjBTxO6+/liz/pFdTMqfFlHlcYYFKZ0mP3SY/CrEezETkG+oO41E9yjEyxIm1sDVNnqeqUUnzPtIwMnQ9TMGyAX4L7DmaPLDXbdtVadJFqxcsWapc3YRmJlu6cVDpFYg1l/GD72OFwinffuFTZWnRlTeQJ4sx9gCjFw2Kml2qAccoA9wJ9uIPXQ61Afu5yf+IjAlevRW5Zyf4aZ87Ni+VIl2xnUo00p9eO2AY7bBQATEljPA4XVtqq1OzTzx+4DSWPvMDUPeoA5jAW0+kaKmWnpIN8zGxm5MTqd+EvSXTdWp2QzKh1AgA/hHzxWLs2kRRfcd1XpUVio6yblEGYk8Tc5j+87E8sKds9I2uKK9XNs5u5H3j6o5DCNsR7xi1y1j6R9FTll2lmJJLJc9zY7Hn0TjsbR95Pc2Ox0qP4IwVfzY29N6RYUo3Ft0/Zxlf0T7x8P7Y+rY7LhNXDZ5XuMp4jJG1j5SNlgaN+fDEf0cbl9h+WPq8Y6ML0fsvrPR8obZ+K+/wCWPf0cfY9hx9WjHRiaL2TWej5O+zDcnv8AjiipQ/cbyx9fjHRiaL2TWej4pX2ViYUEb7A4obZagmZPepx9yjHRi2j9k1no+HItQaIe8W+GJjaaw0NUd2b4Y+3Y7A0fsGq9HxI7dXmc9UWjRsQbbK5+vV9uPuGPMHRpdyav0fCXao3rGoe/Nio0W+w3kflj75GOjE0nsmq9HwBqT/YbyPyxFqDn6rfhOP0DGOjE0nsmq9H576l/st5H5YmdneLK34T8sfoGMexg6X2TU+j579FCELtEgjtJqCNzccdj6EMdjRCNlYzzld3P/9k="
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
