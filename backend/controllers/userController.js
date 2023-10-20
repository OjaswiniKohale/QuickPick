const bcrypt = require("bcrypt");
const mysql = require("mysql2/promise");
const loadConfig = require("../config/loadConfig");
const config = loadConfig();

module.exports = {
  signup: async (req, res) => {
    const { firstName, middleName, lastName, email, phone, password } =
      req.body;

    const pool = await mysql.createPool({
      host: config.database.HOST,
      user: config.database.USERNAME,
      database: config.database.NAME,
      password: config.database.PASSWORD, // Add your MySQL password here
    });

    try {
      const [rows, fields] = await pool.execute(
        "SELECT first_name FROM customer WHERE email = ?",
        [email],
      );

      if (rows.length === 0) {
        // Check if the email is not already in use
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);

        await pool.execute(
          "INSERT INTO customer (first_name, middle_name, last_name, email, phone, password) VALUES (?, ?, ?, ?, ?, ?)",
          [firstName, middleName, lastName, email, phone, hashPassword],
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

    const pool = await mysql.createPool({
      host: config.database.HOST,
      user: config.database.USERNAME,
      database: config.database.NAME,
      password: config.database.PASSWORD, // Add your MySQL password here
    });

    try {
      const [rows, fields] = await pool.execute(
        "SELECT password FROM customer WHERE email = ?",
        [email],
      );

      if (rows.length === 0) {
        res.status(400).json({ message: "This email has not registered" });
      } else {
        const match = await bcrypt.compare(rows.password, password); // Remaining: Check rows object

        if (match) {
          res.status(200).json({ message: "success" });
        } else {
          res.status(400).json({ message: "Incorrect password entered" });
        }
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
