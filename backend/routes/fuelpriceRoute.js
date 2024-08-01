const express = require('express');
const router = express.Router();
const fuelDataController = require("../controllers/fuelpriceController");

router.get('/all-state-fuel-price', fuelDataController.fuelPricerateController);

router.get('/fuelprices/state/:stateId', fuelDataController.getStateFuelPrices);




module.exports = router;