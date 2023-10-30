const express = require("express");
const cartController = require("../controllers/cartController");

const router = express.Router();

router.post("/addToCart", cartController.addToCart);
router.get("/getCart", cartController.getCart);
router.post("/removeFromCart", cartController.removeFromCart);
router.post("/updateQuantity", cartController.updateQuantity);

module.exports = router;
