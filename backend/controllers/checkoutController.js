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
    },
    savePayment: async(req, res) => {
        const token = req.cookies.token; // Token is stored in a cookie named 'token'
    
        if (!token) {
          return res.status(401).json({ message: "Unauthorized" });
        }
        try {
            const decoded = jwt.verify(token, config.server.JWT_SECRET);
            const email = decoded.email;
            const {card_name, card_number, cvv} = req.body;

            const pool = req.pool;

            const [custRows] = await pool.execute(
                "SELECT customer_id FROM customer WHERE email = ?",
                [email],
              );
            
            const [payRows] = await pool.execute(
                "SELECT payment_id FROM payment WHERE customer_id = ?",
                [custRows[0].customer_id],
            );

            if (payRows.length === 0) {
                const currentDate = new Date();
                const formattedDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');
                // Gotta add payment_amount here
                await pool.execute(
                    "INSERT INTO payment(card_name, card_number, cvv, customer_id, payment_date) VALUES (?, ?, ?, ?, ?)",
                    [card_name, card_number, cvv, custRows[0].customer_id, formattedDate],
                );
                res.status(200).json({message:"Set payment details"})
            } else {
                await pool.execute(
                    "UPDATE payment SET card_name = ? WHERE payment_id = ?",
                    [card_name, payRows[0].payment_id],
                );
                await pool.execute(
                    "UPDATE payment SET card_number = ? WHERE payment_id = ?",
                    [card_number, payRows[0].payment_id],
                );
                await pool.execute(
                    "UPDATE payment SET cvv = ? WHERE payment_id = ?",
                    [cvv, payRows[0].payment_id],
                );
                res.status(200).json({message:"Set payment details"})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"Internal server error!!"})
        }
    }      
}