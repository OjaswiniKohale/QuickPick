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
                const [totalPriceRows] = await pool.execute(
                    "select sum(total_price) as total from cart_items where cart_id=(select cart_id from shopping_cart where customer_id=?)",
                    [custRows[0].customer_id],
                )
                await pool.execute(
                    "INSERT INTO payment(card_name, card_number, cvv, customer_id, payment_date,payment_amount) VALUES (?, ?, ?, ?, ?, ?)",
                    [card_name, card_number, cvv, custRows[0].customer_id, formattedDate,totalPriceRows[0].total],
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
                const [totalPriceRows] = await pool.execute(
                    "select sum(total_price) as total from cart_items where cart_id=(select cart_id from shopping_cart where customer_id=?)",
                    [custRows[0].customer_id],
                )
                await pool.execute(
                    "UPDATE payment SET payment_amount = ? WHERE payment_id = ?",
                    [totalPriceRows[0].total, payRows[0].payment_id],
                );

                res.status(200).json({message:"Set payment details"})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({message:"Internal server error!!"})
        }
    },
    reviewOrder: async (req,res) => {
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
            const [productDetailRows] = await pool.execute(
                "select p.name, c.quantity, c.total_price from product p inner join cart_items c on p.product_id=c.product_id inner join shopping_cart s on s.cart_id = c.cart_id where s.customer_id=?",
                [custRows[0].customer_id]
            )
            console.log(productDetailRows)
            res.status(200).json(productDetailRows)
        }
        catch(error){
            return res.status(500).json({message:"Internal server error"});
        }
    },

    deliveryCost : async(req,res) => {
        const token = req.cookies.token; // Token is stored in a cookie named 'token'

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    try {
      // Verify the token
      const pool = req.pool;

      const decoded = jwt.verify(token, config.server.JWT_SECRET);
      const email = decoded.email;
      const [custRows] = await pool.execute(
        "SELECT customer_id FROM customer WHERE email = ?",
        [email]
      );
      const [prevDelivery] = await pool.execute(
        "SELECT * FROM delivery WHERE customer_id = ?",
        [custRows[0].customer_id],
      )
      if(prevDelivery.length===0)
      {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');
        const [totalPriceRows] = await pool.execute(
            "select sum(total_price) as total from cart_items where cart_id=(select cart_id from shopping_cart where customer_id=?)",
            [custRows[0].customer_id],
        )
        const deliveryCost = totalPriceRows[0].total*0.05 + totalPriceRows[0].total
        await pool.execute(
          "INSERT INTO delivery(delivery_date,delivery_cost,customer_id) VALUES(?,?,?)",
          [formattedDate,deliveryCost,custRows[0].customer_id],
        )
        res.status(200).json({ deliveryCost : deliveryCost});
      }
      else{
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');
        const [totalPriceRows] = await pool.execute(
            "select sum(total_price) as total from cart_items where cart_id=(select cart_id from shopping_cart where customer_id=?)",
            [custRows[0].customer_id],
        )
        const deliveryCost = totalPriceRows[0].total*0.05 + totalPriceRows[0].total
        await pool.execute(
          "UPDATE delivery SET delivery_date=?,delivery_cost=? WHERE customer_id=?",
          [formattedDate,deliveryCost,custRows[0].customer_id],
        )
        res.status(200).json({ deliveryCost : deliveryCost});
      }
    }
    catch(error)
    {
        return res.status(500).json({message:"Internal server error"});
    }
} 
}




