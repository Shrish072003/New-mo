const express = require('express');
const user = express();

const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');


user.use(bodyParser.urlencoded({ extended: true }));
user.use(express.static(path.resolve(__dirname,'public')));

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Use an absolute path for the destination
        cb(null, path.resolve(__dirname, '../public/uploadsBrandCsv'));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // This is correct
    }
});


var upload = multer({storage:storage});


const brandControllerCSV = require("../controllers/brandCSVcontroller");
//CSV UPLOAD POST REQUEST || POST

user.post('/import-brand-csv', upload.single('file'),brandControllerCSV.allbrandCSVcontroller);

module.exports = user