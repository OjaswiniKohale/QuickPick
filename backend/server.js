const app = require("./app.js");
const path = require("path");
const mysql = require("mysql2/promise");
const loadConfig = require("./config/loadConfig.js");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes")
const config = loadConfig();

const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  database: config.database.NAME,
  password: config.database.PASSWORD,
  waitForConnections: true,
  connectionLimit: 10, // Adjust the connection limit as needed
});

app.use((req, res, next) => {
  req.pool = pool;
  next();
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", productRoutes);
app.use("/api/v1", cartRoutes);
app.use("/api/v1", checkoutRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

try {
  app.listen(config.server.PORT, () => {
    console.log(
      `The server is running on http://localhost:${config.server.PORT}`,
    );
  });
} catch (error) {
  console.log("An error occured: ", error);
}
