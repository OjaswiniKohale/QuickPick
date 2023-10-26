const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/login", userController.login);
router.post("/signup", userController.signup);
router.get("/getToken", userController.getToken);
router.get("/clearCookies", userController.clearCookies);

module.exports = router;
