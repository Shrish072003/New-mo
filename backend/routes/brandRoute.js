const express = require('express');
const brand_route = express();

const bodyParser = require('body-parser');
brand_route.use(bodyParser.json());
brand_route.use(bodyParser.urlencoded({ extended: true }));

const multer = require('multer');
const path = require('path');

brand_route.use(express.static('public'));

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, path.join(__dirname, '../public/brandImages'), function (error, success) {
//             if (error) throw error;
//         });
//     },
//     filename: function (req, file, cb) {
//         const name = Date.now() + '-' + file.originalname;
//         cb(null, name, function (error1, success1) {
//             if (error1) throw error1;
//         });
//     }
// }); 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Simply set the destination, no need for an extra callback function here.
        cb(null, path.join(__dirname, '../public/brandImages'));
    },
    filename: function (req, file, cb) {
        // Generate a new filename and return it, no need for an extra callback function here.
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    }
});
const upload = multer({ storage: storage });

const brandController = require('../controllers/brandController');

// Add Brand
brand_route.post('/addbrand', upload.single('image'), brandController.registered_brand);

// Edit Brand
brand_route.put('/editbrand/:id', upload.single('image'), brandController.edit_brand);

// Get Brand by ID
brand_route.get('/getbrand/:id', brandController.get_brand_by_id);

//csv upload for brand

module.exports = brand_route;
