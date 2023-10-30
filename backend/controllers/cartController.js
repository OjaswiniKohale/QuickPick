const mysql = require("mysql2/promise");
const loadConfig = require("../config/loadConfig");
const config = loadConfig();
const jwt = require("jsonwebtoken");

module.exports = {
  addToCart: async (req, res) => {
    const token = req.cookies.token; // Token is stored in a cookie named 'token'

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    try {
      const decoded = jwt.verify(token, config.server.JWT_SECRET);
      const email = decoded.email;

      const pool = req.pool;

      const { name, totalPrice, img, quantity } = req.body;

      const [custRows] = await pool.execute(
        "SELECT customer_id FROM customer WHERE email = ?",
        [email]
      );

      let [selectCartRows] = await pool.execute(
        "SELECT cart_id FROM shopping_cart WHERE customer_id = ?",
        [custRows[0].customer_id]
      );

      if (selectCartRows.length === 0) {
        const conn = await pool.getConnection();
        await conn.beginTransaction();
        await pool.execute(
          "INSERT INTO shopping_cart(customer_id) values (?)",
          [custRows[0].customer_id]
        );
        await conn.commit();
        [selectCartRows] = await pool.execute(
          "SELECT cart_id FROM shopping_cart WHERE customer_id = ?",
          [custRows[0].customer_id]
        );
      }

      const [prodRows] = await pool.execute(
        "SELECT product_id FROM product WHERE name = ? AND image_url = ?",
        [name, img]
      );

      const [inventoryRows] = await pool.execute(
        "SELECT quantity FROM inventory WHERE product_id = ?",
        [prodRows[0].product_id],
      );

      if (inventoryRows[0].quantity === -1) {
        return res.status(200).json({ message: "Quantity insufficient" });
      }

      const [itemExistsRows] = await pool.execute(
        "SELECT * FROM cart_items WHERE product_id=? AND cart_id=?",
        [prodRows[0].product_id, selectCartRows[0].cart_id]
      );

      if (itemExistsRows.length === 0) {
        if (quantity > inventoryRows[0].quantity) {
          return res.status(200).json({ message: "Quantity insufficient" });
        } else {
          const conn = await pool.getConnection();
          await conn.beginTransaction();
          await pool.execute(
            "INSERT into cart_items (cart_id,product_id,quantity,total_price) values (?,?,?,?)",
            [
              selectCartRows[0].cart_id,
              prodRows[0].product_id,
              quantity,
              totalPrice,
            ]
          );
          await conn.commit();
          await conn.release();
          res.status(200).json({ message: "Added to cart" });
        }
      } else {
        if (quantity > inventoryRows[0].quantity) {
          return res.status(200).json({ message: "Quantity insufficient" });
        } else {
          const conn = await pool.getConnection();
          await conn.beginTransaction();
          await pool.execute(
            "UPDATE cart_items set quantity =?, total_price = ? where product_id=? and cart_id=?",
            [itemExistsRows[0].quantity + quantity, itemExistsRows[0].total_price + totalPrice, prodRows[0].product_id, selectCartRows[0].cart_id]
          );
          await conn.commit();
          await conn.release();
          res.status(200).json({ message: "Added to cart" });
        }
      }
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
  getCart: async (req, res) => {
    const token = req.cookies.token; // Token is stored in a cookie named 'token'

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    try {
      const decoded = jwt.verify(token, config.server.JWT_SECRET);
      const email = decoded.email;

      const pool = req.pool;

      const [custRows] = await pool.execute(
        "SELECT customer_id FROM customer WHERE email = ?",
        [email]
      );

      const [returnCartRows] = await pool.execute(
        "SELECT p.product_id, p.name, p.image_url, c.total_price, c.quantity FROM product p NATURAL JOIN cart_items c WHERE c.cart_id =(select cart_id from shopping_cart where customer_id=?)",
        [custRows[0].customer_id]
      );
      return res.status(200).json({ cartProducts: returnCartRows });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  removeFromCart: async(req,res) => {
    const token = req.cookies.token; // Token is stored in a cookie named 'token'  

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    try {
      const decoded = jwt.verify(token, config.server.JWT_SECRET);
      const email = decoded.email;
      const {pid} = req.body;
      const pool = req.pool;
      const [custRows] = await pool.execute(
        "SELECT customer_id FROM customer WHERE email = ?",
        [email]
      );
      const [shoppingCartRows] = await pool.execute(
        "SELECT cart_id FROM shopping_cart WHERE customer_id=?",
        [custRows[0].customer_id],
      );
      const conn = await pool.getConnection();
      await conn.beginTransaction();
      await pool.execute(
        "DELETE FROM cart_items WHERE product_id=? and cart_id=?",
        [pid,shoppingCartRows[0].cart_id],
      )
      await conn.commit();
      await conn.release();
      res.status(200).json({ message: "Successfully Deleted" });
    }
    catch(error)
    {
      console.log(error)
      res.status(500).json({ message: "Internal server error" });
    }
  },
   updateQuantity: async(req,res)=>{
    const token = req.cookies.token; // Token is stored in a cookie named 'token'  

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    try 
    {
      const decoded = jwt.verify(token, config.server.JWT_SECRET);
      const email = decoded.email;
      const {pid,increaseQuantity,unitPrice} = req.body;
      const pool = req.pool;
      const [custRows] = await pool.execute(
        "SELECT customer_id FROM customer WHERE email = ?",
        [email]
      );
      const [shoppingCartRows] = await pool.execute(
        "SELECT cart_id FROM shopping_cart WHERE customer_id=?",
        [custRows[0].customer_id],
      );
      const [inventoryRows] = await pool.execute(
        "SELECT quantity FROM inventory WHERE product_id =?",
        [pid],
      );
        if(increaseQuantity){
          const [quantityRows] = await pool.execute(
            "SELECT quantity FROM cart_items WHERE cart_id = ? AND product_id = ?",
            [shoppingCartRows[0].cart_id,pid],
          );
            console.log(inventoryRows[0].quantity );
          if (inventoryRows[0].quantity===0) {
            return res.status(200).json({ message: "Quantity issue" });
          }
          const conn = await pool.getConnection();
          await conn.beginTransaction();
          await pool.execute(
            "UPDATE cart_items set quantity =quantity +1, total_price = total_price + ? where cart_id=? and product_id=?",
            [unitPrice, shoppingCartRows[0].cart_id,pid],
          )
          await conn.commit();
          await conn.release();
          return res.status(200).json({ message: "Successfully Updated Quantity" });
        }
        else{
          const [quantityRows] = await pool.execute(
            "SELECT quantity FROM cart_items WHERE cart_id = ? AND product_id = ?",
            [shoppingCartRows[0].cart_id,pid],
          );
          if (quantityRows[0].quantity < 0) {
            return res.status(200).json({ message: "Quantity issue" });
          }
          const conn = await pool.getConnection();
          await conn.beginTransaction();
          await pool.execute(
            "UPDATE cart_items set quantity =quantity -1, total_price = total_price - ? where cart_id=? and product_id=?",
            [unitPrice, shoppingCartRows[0].cart_id,pid],
          )
          await conn.commit();
          await conn.release();
          return res.status(200).json({ message: "Successfully Updated Quantity" });
        }
   }
   catch(error){
    res.status(500).json({ message: "Internal server error" });
   }
  },
};
