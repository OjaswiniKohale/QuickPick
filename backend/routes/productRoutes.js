const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.get("/products/:category?", productController.getProducts);

module.exports = router;
