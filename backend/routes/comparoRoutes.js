const express = require('express');
const comparo_route = express.Router();

const bodyParser = require('body-parser');
comparo_route.use(bodyParser.json());
comparo_route.use(bodyParser.urlencoded({ extended: true }));

const comparoController = require('../controllers/comparoController');


//GET ALL BRANDS FOR COMPARO
comparo_route.get('/get-all-brands', comparoController.get_all_brands_forComparo);


//GET PRODUCT BY BRAND ID
comparo_route.get('/get-product-by-brandid', comparoController.find_product_by_brandId);

//GET VARIENT BY PRODUCT ID
comparo_route.get('/get-varient-by-productid',comparoController.find_variants_by_productId );












module.exports = comparo_route;