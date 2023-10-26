const express = require("express");
const checkoutController = require("../controllers/checkoutController");

const router = express.Router();

router.post("/checkoutcart", checkoutController.checkoutCart);
router.post("/savePayment", checkoutController.savePayment);
router.get("/reviewOrder", checkoutController.reviewOrder);

module.exports = router;
