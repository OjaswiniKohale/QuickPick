const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.get("/products/:category?", productController.getProducts);
router.post("/storeRating", productController.storeRating);


module.exports = router;
