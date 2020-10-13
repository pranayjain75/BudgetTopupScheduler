const express = require("express");
const router = express.Router();
const budgetController = require("./budgetController");

router.get("/users", budgetController.getUsers);
router.get("/totalBudget", budgetController.getTotalBudget);

module.exports = router;
