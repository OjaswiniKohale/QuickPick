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
        [email],
      );

      await pool.execute(
        "UPDATE product SET customer_id = ? WHERE name = ? AND image_url = ?",
        [custRows[0].customer_id, name, img],
      );

      const [prodRows] = await pool.execute(
        "SELECT product_id FROM product WHERE name = ? AND image_url = ?",
        [name, img],
      );

      const [cartRows] = await pool.execute(
        "SELECT product_id, no_of_products, total_price FROM shopping_cart WHERE product_id = ?",
        [prodRows[0].product_id],
      );

      if (cartRows.length > 0) {
        await pool.execute(
          "UPDATE shopping_cart SET no_of_products = ? WHERE product_id = ?",
          [quantity + cartRows[0].no_of_products, prodRows[0].product_id],
        );
        await pool.execute(
          "UPDATE shopping_cart SET total_price = ? WHERE product_id = ?",
          [totalPrice + cartRows[0].total_price, prodRows[0].product_id],
        );
        res.status(200).json({ message: "Added to cart" });
      } else {
        await pool.execute(
          "INSERT INTO shopping_cart(product_id, no_of_products, total_price, customer_id) VALUES (?, ?, ?, ?)",
          [
            prodRows[0].product_id,
            quantity,
            totalPrice,
            custRows[0].customer_id,
          ],
        );
        res.status(200).json({ message: "Added to cart" });
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
        [email],
      );

      const [returnCartRows] = await pool.execute(
        "SELECT p.name, p.image_url, c.total_price, c.no_of_products FROM product p INNER JOIN shopping_cart c ON p.customer_id = c.customer_id WHERE p.customer_id = ?",
        [custRows[0].customer_id],
      );

      res.status(200).json({ cartProducts: returnCartRows });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
