const mysql = require("mysql2/promise");
const loadConfig = require("../config/loadConfig");
const config = loadConfig();
const jwt = require("jsonwebtoken")

module.exports ={
    checkoutCart: async (req, res) => {
        const token = req.cookies.token; // Token is stored in a cookie named 'token'
    
        if (!token) {
          return res.status(401).json({ message: "Unauthorized" });
        }
        try {
            const decoded = jwt.verify(token, config.server.JWT_SECRET);
            const email = decoded.email;
      
            const pool = req.pool;
            
            const {address} = req.body;
            const [custRows] = await pool.execute(
                "SELECT customer_id FROM customer WHERE email = ?",
                [email]
              );
            const [addressRows] = await pool.execute(
                "UPDATE customer set address = ? WHERE customer_id = ?",
                [address,custRows[0].customer_id],
            );
            
            res.status(200).json({message:"Successfully got the address"})
        }
        catch(error){
            console.log(error)
            res.status(500).json({message:"Internal server error!!"})
        }
    }      
}