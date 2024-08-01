const express = require('express');
const multer = require('multer');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const car_controller = require("../controllers/productController");
const app = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// multer configuration
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, '../public/productImages');
//     },
//     filename: (req, file, cb) => {
//         cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
//     }
// });

const uploadDir = path.join(__dirname, '..', 'public', 'productImages');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });
const uploadFields = [
    { name: 'heroimage', maxCount: 1 },
    { name: 'grayimage', maxCount: 1 },
    { name: 'redimage', maxCount: 1 },
    { name: 'greenimage', maxCount: 1 },
    { name: 'blueimage', maxCount: 1 },
    { name: 'blackimage', maxCount: 1 },
    { name: 'creamimage', maxCount: 1 },
    { name: 'brownimage', maxCount: 1 },
    { name: 'yellowimage', maxCount: 1 },
    { name: 'purpleimage', maxCount: 1 },
    { name: 'whiteimage', maxCount: 1 },
    { name: 'carbrowsher', maxCount: 1 },
    { name: 'keyF1', maxCount: 1 },
    { name: 'keyF2', maxCount: 1 },
    { name: 'keyF3', maxCount: 1 },
    { name: 'keyF4', maxCount: 1 },
    { name: 'keyF5', maxCount: 1 },
    { name: 'keyF6', maxCount: 1 },
    { name: 'keyF7', maxCount: 1 },
    { name: 'keyF8', maxCount: 1 },
    { name: 'keyF9', maxCount: 1 },
    { name: 'keyF10', maxCount:1},
    { name: 'keyF11', maxCount: 1},
    { name: 'keyF12', maxCount: 1},
    { name: 'keyF13', maxCount: 1},
    { name : 'keyF14', maxCount: 1},
    { name: 'keyF15', maxCount: 1},
    { name: 'keyF16', maxCount: 1},
    { name: 'keyF17', maxCount: 1},
    { name: 'keyF18', maxCount: 1},
    { name: 'keyF19', maxCount: 1},
    { name: 'keyF20', maxCount: 1},
    { name: 'spaceC1', maxCount: 1 },
    { name: 'spaceC2', maxCount: 1 },
    { name: 'spaceC3', maxCount: 1 },
    { name: 'spaceC4', maxCount: 1 },
    { name: 'spaceC5', maxCount: 1 },
    { name: 'spaceC6', maxCount: 1 },
    { name: 'spaceC7', maxCount: 1 },
    { name: 'spaceC8', maxCount: 1 },
    { name: 'spaceC9', maxCount: 1 },
    { name: 'spaceC10', maxCount:1},
    { name: 'spaceC11', maxCount: 1},
    { name: 'spaceC12', maxCount: 1},
    { name: 'spaceC13', maxCount: 1},
    { name : 'spaceC14', maxCount: 1},
    { name: 'spaceC15', maxCount: 1},
    { name: 'spaceC16', maxCount: 1},
    { name: 'spaceC17', maxCount: 1},
    { name: 'spaceC18', maxCount: 1},
    { name: 'spaceC19', maxCount: 1},
    { name: 'spaceC20', maxCount: 1},
    { name: 'storageC1', maxCount: 1 },
    { name: 'storageC2', maxCount: 1 },
    { name: 'storageC3', maxCount: 1 },
    { name: 'storageC4', maxCount: 1 },
    { name: 'storageC5', maxCount: 1 },
    { name: 'storageC6', maxCount: 1 },
    { name: 'storageC7', maxCount: 1 },
    { name: 'storageC8', maxCount: 1 },
    { name: 'storageC9', maxCount: 1 },
    { name: 'storageC10', maxCount:1},
    { name: 'storageC11', maxCount: 1},
    { name: 'storageC12', maxCount: 1},
    { name: 'storageC13', maxCount: 1},
    { name : 'storageC14', maxCount: 1},
    { name: 'storageC15', maxCount: 1},
    { name: 'storageC16', maxCount: 1},
    { name: 'storageC17', maxCount: 1},
    { name: 'storageC18', maxCount: 1},
    { name: 'storageC19', maxCount: 1},
    { name: 'storageC20', maxCount: 1}
];

// PUT route for editing a car
// Assuming `app` is your Express router instance
// // Temporary use for debugging purposes only
app.put('/cars-edit/:carId', upload.fields(uploadFields), car_controller.editCarController);

//Search Product Api for App

app.get('/search-product', car_controller.searchProductController);

//get all car for ptoduct popularity
app.get('/get-all-cars-for-popularity', car_controller.getAllCarsForPopularityModule)

//Update Popularity of Product
// Update car popularity route
app.put('/update-popularity/:carId', car_controller.updateCarPopularity);

//Get Popular Cars for Frontend
// app.get('/get-popular-cars-app-and-web',car_controller.getPopularCarsController);

//getPopularCarsWithLowestVariantPriceController
app.get('/get-popular-cars-app-and-web',car_controller.getPopularCarsWithLowestVariantPriceController);

module.exports = app;
