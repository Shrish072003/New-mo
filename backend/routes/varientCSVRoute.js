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
        cb(null, path.resolve(__dirname, '../public/uploadVarientCsv'));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // This is correct
    }
});


var upload = multer({storage:storage});


const varientCSV = require("../controllers/varientCSVcontroller");
//CSV UPLOAD POST REQUEST || POST

user.post('/import-varient-csv', upload.single('file'),varientCSV.csvControllerVarient);

module.exports = user