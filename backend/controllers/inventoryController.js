const mysql = require("mysql2/promise");
const loadConfig = require("../config/loadConfig");
const config = loadConfig();
const jwt = require("jsonwebtoken");

module.exports = {
    updateInventory: async (req, res) => {
      const token = req.cookies.admintoken; // Token is stored in a cookie named 'token'
  
      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      try {
        const decoded = jwt.verify(token, config.server.JWT_SECRET);
  
        const pool = req.pool;
  
        const { product_id, quantity } = req.body;
        const conn = await pool.getConnection();
        await conn.beginTransaction();
        await pool.execute(
          "UPDATE inventory SET quantity = ? WHERE product_id = ?",
          [quantity, product_id]
        );
        await conn.commit();
        return res.status(200).json({ message: "Updated quantity" });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    },
  };