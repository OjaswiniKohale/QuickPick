const mysql = require("mysql2/promise");
const loadConfig = require("../config/loadConfig");
const config = loadConfig();
const jwt = require("jsonwebtoken");

module.exports = {
  getProducts: async (req, res) => {
    const token = req.cookies.token; // Token is stored in a cookie named 'token'
    const adminToken = req.cookies.admintoken;

    if (!token && !adminToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      // Verify the token
      const pool = req.pool;
      const category = req.query.category;
      if (adminToken) {
        const decoded = jwt.verify(adminToken, config.server.JWT_SECRET);
        const email = decoded.email;
        console.log(email);
        if(email==='groot@admin.com' || email === 'beetroot@admin.com'){
        
          const [rows] = await pool.execute(
            "select p.product_id, p.image_url,p.name,p.price,i.quantity from product p inner join inventory i on p.product_id= i.product_id where i.category = ?",
            [category],
          );
          if (rows.length > 0) {
            res.status(200).json({ products: rows });
          } else {
            res.status(404).json({ message: "No products found" });
          }
        }
      } else{
        const decoded = jwt.verify(token, config.server.JWT_SECRET);
        
        const [rows] = await pool.execute(
          "SELECT name, image_url, price FROM product WHERE category = ?",
          [category],
        );
        if (rows.length > 0) {
          res.status(200).json({ products: rows });
        } else {
          res.status(404).json({ message: "No products found" });
        }
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
