const express = require('express');
const router = express.Router();
const fs = require('fs');

const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static(path.resolve(__dirname,'public')));

const csvController = require("../controllers/serviceCentreController");

const storage = multer.diskStorage({
    destination: function(req,res,cb){
        if(!fs.existsSync("public")){
            fs.mkdirSync("public");
        }
        if(!fs.existsSync("public/uploadserviceCsv")){
            fs.mkdirSync("public/uploadserviceCsv");
        }
        cb(null,"public/uploadserviceCsv")
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

router.post('/upload-servicecentre-csv',upload.single('csvFile'),csvController.serviceCentreCSVcontroller);

//GET Data for Admin Panal || ADMIN PANAL 
router.get('/get-servicecentre-data-for-admin-panal', csvController.get_all_list_for_admin_servicecentreList);

//GET data for app and web || APP & WEB || GET
router.get('/get-all-servicecentrelist', csvController.get_all_list_for_appandweb_servicecentreList);

//Count the service centres number for frontend || GET
router.get('/total-countof-servicecentre', csvController.count_serviceCentre_by_brand);

//DELETE the service centre for frontend || DELETE
router.delete('/delete-servicecentre', csvController.delete_serviceCentre_by_name);

//GET CITY WISE SERVICE CENTRE FOR APP AND WEB || GET
router.get('/get-servicecentre-citywise', csvController.get_city_wise_serviceCentres_by_brand);


module.exports = router