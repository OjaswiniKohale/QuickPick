const mysql = require("mysql2/promise");
const loadConfig = require("../config/loadConfig");
const config = loadConfig();
const jwt = require("jsonwebtoken");

module.exports = {
  getProducts: async (req, res) => {
    const token = req.cookies.token; // Token is stored in a cookie named 'token'

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      // Verify the token
      const decoded = jwt.verify(token, config.server.JWT_SECRET);

      const pool = await mysql.createPool({
        host: config.database.HOST,
        user: config.database.USERNAME,
        database: config.database.NAME,
        password: config.database.PASSWORD, // Add your MySQL password here
      });

      const { category } = req.params;

      const [rows] = await pool.execute(
        "SELECT name, image_url, price FROM product WHERE category = ?",
        [category],
      );
      if (rows.length > 0) {
        res.status(200).json({ products: rows });
      } else {
        res.status(404).json({ message: "No products found" });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
