const app = require("./app.js");
const path = require("path");
const loadConfig = require("./config/loadConfig.js");
const userRoutes = require("./routes/userRoutes");

app.use("/api/v1", userRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

try {
  const config = loadConfig();
  app.listen(config.server.PORT, () => {
    console.log(
      `The server is running on http://localhost:${config.server.PORT}`,
    );
  });
} catch (error) {
  console.log("An error occured: ", error);
}
