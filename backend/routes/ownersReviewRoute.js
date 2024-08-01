const express = require('express');
const ownersreview_route = express();

const bodyParser = require('body-parser');
ownersreview_route.use(bodyParser.json());
ownersreview_route.use(bodyParser.urlencoded({ extended: true }));

const multer = require('multer');
const path = require('path');

ownersreview_route.use(express.static('public'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/ownersreviewImages'), function (error, success) {
            if (error) throw error;
        });
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name, function (error1, success1) {
            if (error1) throw error1;
        });
    }
});
const upload = multer({ storage: storage });

const ownerReviewModel = require("../controllers/ownersReviewController");

// Add Review For App and web
ownersreview_route.post('/add-review', upload.single('imageOfCar'), ownerReviewModel.saveReview);

//Get All Reviews for Admin Panal
ownersreview_route.get('/get-all-reviews', ownerReviewModel.getAllReview_forAdmin);

//CSV DOWNLOAD FOR ADMIN PANAL
ownersreview_route.get('/export-reviews',ownerReviewModel.exportOwnersReview);

//Get Review by Id
ownersreview_route.get('/get-review-by-id/:id',ownerReviewModel.getReviewById);

// Route to update review permission
ownersreview_route.put('/update-permission/:id', ownerReviewModel.updateReviewPermission);

//Route to DELETE the review

ownersreview_route.delete('/delete-review/:id', ownerReviewModel.deleteReview);

//Route to get review by car id
ownersreview_route.get('/get-review/:id', ownerReviewModel.getReviewsByCarId);


module.exports = ownersreview_route;