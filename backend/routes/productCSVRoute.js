const express = require('express');
const router = express.Router();
const fs = require('fs');

const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static(path.resolve(__dirname,'public')));

const csvController = require("../controllers/productCSVController");

const storage = multer.diskStorage({
    destination: function(req,res,cb){
        if(!fs.existsSync("public")){
            fs.mkdirSync("public");
        }
        if(!fs.existsSync("public/uploadProductCsv")){
            fs.mkdirSync("public/uploadProductCsv");
        }
        cb(null,"public/uploadProductCsv")
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

router.post('/upload-product-csv',upload.single('csvFile'),csvController.allProductCSVcontroller);

module.exports = router