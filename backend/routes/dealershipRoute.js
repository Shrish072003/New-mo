const express = require('express');
const router = express.Router();
const fs = require('fs');

const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static(path.resolve(__dirname,'public')));

const csvController = require("../controllers/dealershipController");

const storage = multer.diskStorage({
    destination: function(req,res,cb){
        if(!fs.existsSync("public")){
            fs.mkdirSync("public");
        }
        if(!fs.existsSync("public/uploadDealershipCsv")){
            fs.mkdirSync("public/uploadDealershipCsv");
        }
        cb(null,"public/uploadDealershipCsv")
    },
    filename: function(req,file, cb){
        cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({
    storage: storage,
    fileFilter: function(req,file, cb){
        var ext = path.extname(file.originalname);

        if (ext !==".csv"){
            return cb(new Error("Only CSV files are supported"));
        }

        cb(null,true);
    }
});

router.post('/upload-dealership-csv',upload.single('csvFile'),csvController.dealershipCSVcontroller);

//GET ALL DEALERSHIP DATA FOR ADMIN PANAL
router.get('/dealershipdata-for-admin', csvController.get_all_list_for_admin_delaershipList );

//GET ALL DEALERSHIP DATA FOR APP AND WEB || APP AND WEB
router.get('/alldealership-data-for-frontend', csvController.get_all_list_for_appandweb_delaershipList);

//Count total number of Delership from Brand Id || APP AND WEB
router.get('/totalcount-by-brand', csvController.count_dealership_by_brand);

//DELETE delership by name || Admin Panal
router.delete('/delete-delership-by-name', csvController.delete_delership_by_name);

//CITY WISE DELERSHIP BY BRANDID || APP and WEB || GET
router.get('/city-wise-delership-by-brand', csvController.get_city_wise_delershipCentres_by_brand);

module.exports = router