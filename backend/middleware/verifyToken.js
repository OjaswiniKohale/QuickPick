const jwt = require("jsonwebtoken");
const loadConfig = require("../config/loadConfig");
const config = loadConfig();

async function checkJwtToken(req, res, next) {
  try {
    // Get the token from the request's cookies
    const token = req.cookies.token;
    const adminToken = req.cookies.token;

    if (!token && !adminToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Verify the token using your JWT verification method
    let decoded;
    if (token) {
      decoded = await jwt.verify(token, config.server.JWT_SECRET);
    } else {
      decoded = await jwt.verify(adminToken, config.server.JWT_SECRET);
    }
    

    // Token is valid, you can access the decoded information
    req.user = decoded; // Store the decoded user data in the request
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token is not valid" });
  }
}

module.exports = checkJwtToken;
