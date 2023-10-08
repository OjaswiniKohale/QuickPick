const app = require("./app.js");
const configFunction = require("./config/loadConfig.js");
const configPath = "./config/config.yaml";
const config = configFunction(configPath);

app.listen(config.server.port, () => {
    console.log(`The server is listening on port ${config.server.port}`);
})
