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
          "SELECT product_id, name, image_url, price FROM product WHERE category = ?",
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

  storeRating: async(req,res) => {
    const token = req.cookies.token; // Token is stored in a cookie named 'token'

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      // Verify the token
      const pool = req.pool;
      const {rating,product_id} = req.body;

      const decoded = jwt.verify(token, config.server.JWT_SECRET);
      const email = decoded.email;
      const [custRows] = await pool.execute(
        "SELECT customer_id FROM customer WHERE email = ?",
        [email]
      );
        console.log(rating)
      const [prevRating] = await pool.execute(
        "SELECT * FROM reviews WHERE customer_id = ? and product_id = ?",
        [custRows[0].customer_id,product_id],
      )

      if(prevRating.length===0)
      {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');
        const conn = await pool.getConnection();
        await conn.beginTransaction();
        await pool.execute(
          "INSERT INTO reviews(rating,review_date,product_id,customer_id) VALUES(?,?,?,?)",
          [rating,formattedDate,product_id, custRows[0].customer_id],
        )
        await conn.commit();
        await conn.release();
        res.status(200).json({ message: "Updated Review" });
      }
      else{
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');
        const conn = await pool.getConnection();
        await conn.beginTransaction();
        await pool.execute(
          "UPDATE reviews SET rating=?, review_date=? WHERE customer_id = ? and product_id = ?",
          [rating,formattedDate,custRows[0].customer_id,product_id],
        )
        await conn.commit();
        await conn.release();
        res.status(200).json({ message: "Updated Review" });
      }
      
    }
    catch(error)
    {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal server error" }); 
    }
  }
};
