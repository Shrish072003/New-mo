const express = require('express');
const router = express.Router();

const calculatorLoran = require("../controllers/loanController");

router.post('/emi-calculator',calculatorLoran.calculateLoan);




module.exports = router;