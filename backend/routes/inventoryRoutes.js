const express = require("express");
const inventoryController = require("../controllers/inventoryController");

const router = express.Router();

router.post("/updateInventory", inventoryController.updateInventory);

module.exports = router;
