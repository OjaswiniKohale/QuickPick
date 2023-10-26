const express = require("express");
const checkoutController = require("../controllers/checkoutController");

const router = express.Router();

router.post("/checkoutcart", checkoutController.checkoutCart);
router.post("/savePayment", checkoutController.savePayment);

module.exports = router;
