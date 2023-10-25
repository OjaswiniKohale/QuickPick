const bcrypt = require("bcrypt");
const mysql = require("mysql2/promise");
const loadConfig = require("../config/loadConfig");
const config = loadConfig();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

module.exports = {
  signup: async (req, res) => {
    const { firstName, middleName, lastName, email, phone, password } =
      req.body;

    const pool = req.pool;

    try {
      const [rows, fields] = await pool.execute(
        "SELECT first_name FROM customer WHERE email = ?",
        [email],
      );

      if (rows.length === 0) {
        // Check if the email is not already in use
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);
        const currentDate = new Date().toISOString().slice(0, 10);
        await pool.execute(
          "INSERT INTO customer (first_name, middle_name, last_name, email, phone_number, account_creation_date, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
          [
            firstName,
            middleName,
            lastName,
            email,
            phone,
            currentDate,
            hashPassword,
          ],
        );

        res.status(200).json({ message: "User registered successfully" });
      } else {
        res.status(400).json({ message: "Email is already in use" });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    const pool = req.pool;
    try {
      if(email==='groot@admin.com' || email === 'beetroot@admin.com'){
        const [rows] = await pool.execute(
          "SELECT password FROM employee WHERE email = ?",
          [email],
        );
        const match = await bcrypt.compare(password, rows[0].password); // Remaining: Check rows object
          if(match){
            const payload = { email: email };
            const token = jwt.sign(payload, config.server.JWT_SECRET, {
              expiresIn: "1h",
            });
            res.cookie("admintoken", token, { maxAge: 3600000, httpOnly: true });
    
            res.status(200).json({ message: "adminsuccess" }); 
          }
          else{
            res.status(400).json({ message: "Incorrect password entered" });
          }
      }
      else{
        const [rows, fields] = await pool.execute(
          "SELECT password FROM customer WHERE email = ?",
          [email],
        );
  
        if (rows.length === 0) {
          res.status(400).json({ message: "This email has not registered" });
        } else {
          const match = await bcrypt.compare(password, rows[0].password); // Remaining: Check rows object
  
          if (match) {
            const payload = { email: email };
            const token = jwt.sign(payload, config.server.JWT_SECRET, {
              expiresIn: "1h",
            });
            res.cookie("token", token, { maxAge: 3600000, httpOnly: true });
  
            res.status(200).json({ message: "success" });
          } else {
            res.status(400).json({ message: "Incorrect password entered" });
          }
        }
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  getToken: async (req, res) => {
    const token = req.cookies.token;
    const adminToken = req.cookies.admintoken;
    if (adminToken) {
      const decoded = jwt.verify(adminToken, config.server.JWT_SECRET);
      if (decoded.email === 'groot@admin.com' || decoded.email ==='beetroot@admin.com') {
        return res.status(200).json({ message: "Admin token exists" });
      }
    }
    else if(token){
      const decoded = jwt.verify(token, config.server.JWT_SECRET);
      return res.status(200).json({ message: "Token exists" });
    }
  },
};
