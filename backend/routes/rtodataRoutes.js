const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const rtoController = require("../controllers/rtodataController");

//SAVE DATA ON ADMIN PANAL || POST
router.post('/save-rto-data', rtoController.rto_data_controller );

//GET DATA ON ADMIN PANAL || GET
router.get('/all-data-chart', rtoController.getallRTOdataController);

//DELETE DATA ON ADMIN PANAL || DELETE
router.delete('/delete-rto-data/:id', rtoController.deleteRTODataController);

//GET DATA FOR APP AND WEB AS PER LOCATION || LANDING PAGE
router.get('/onroad-pricing-for-landingpage', rtoController.getDataByStateController);





module.exports = router