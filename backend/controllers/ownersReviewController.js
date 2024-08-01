const ownersReviewModel = require('../models/ownersReviewModel');
const Car = require('../models/productModel');
const fs = require('fs');
const path = require('path');
const moment = require('moment-timezone');
const { Parser } = require('json2csv');

//SAVING OWNER'S REVIEW DATA TO DATABASE

const saveReview = async (req, res) => {
    try {
        const review = new ownersReviewModel({
            customerName: req.body.customerName,
            email_id: req.body.email_id,
            whatsAppNumber: req.body.whatsAppNumber,
            pinCode: req.body.pinCode,
            profession: req.body.profession,
            refferedBy: req.body.refferedBy,
            brand: req.body.brand,
            product_id: req.body.product_id,
            year: req.body.year,
            varient: req.body.varient,
            fuelType: req.body.fuelType,
            transMission: req.body.transMission,
            carNumber: req.body.carNumber,
            ratingOfCar: req.body.ratingOfCar,
            imageOfCar: req.file ? req.file.filename : null,
            kindOfCar: req.body.kindOfCar,
            approxKMdriven: req.body.approxKMdriven,
            modificationOfVehicle: req.body.modificationOfVehicle,
            whatKindofRoadDrivenon: req.body.whatKindofRoadDrivenon,
            howManypropleDrive: req.body.howManypropleDrive,
            milageinCity: req.body.milageinCity,
            milageInHighway: req.body.milageInHighway,
            overallRangeApplicableForEV: req.body.overallRangeApplicableForEV,
            whyThisCar: req.body.whyThisCar,
            keyReasons: req.body.keyReasons,
            featuresLearntAfterPurchaseing: req.body.featuresLearntAfterPurchaseing,
            thingsLackinThisCar: req.body.thingsLackinThisCar,
            shortlistedCar1: req.body.shortlistedCar1,
            shortlistedCar2: req.body.shortlistedCar2,
            shortlistedCar3: req.body.shortlistedCar3,
            issueWithCar: req.body.issueWithCar,
            willingToRecommende: req.body.willingToRecommende,
            whatsYourEmotion: req.body.whatsYourEmotion,
            nameOfDelership: req.body.nameOfDelership,
            cityAndArea: req.body.cityAndArea,
            raingOfDelershipExperience: req.body.raingOfDelershipExperience,
            whyThisDelership: req.body.whyThisDelership,
            didDelershipForcedtoSellanything: req.body.didDelershipForcedtoSellanything,
            recomendationOfDelership: req.body.recomendationOfDelership,
            serviceOfcarOnDelership: req.body.serviceOfcarOnDelership,
            haveYouServiced: req.body.haveYouServiced,
            differentNameOfDelership: req.body.differentNameOfDelership,
            tipForpeopleForService: req.body.tipForpeopleForService,
            shareAboutDelerchip: req.body.shareAboutDelerchip,
            serviceExperience: req.body.serviceExperience,
            approxServiceCost: req.body.approxServiceCost,
            yourStory: req.body.yourStory
        });

        const newReview = await review.save();
        console.log('New review saved:', newReview);

        // Find the car and update the userRatingfromOwners field
        const car = await Car.findById(req.body.product_id);
        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }

        // Update the userRatingfromOwners field
        const reviews = await ownersReviewModel.find({ product_id: req.body.product_id });
        const totalRatings = reviews.reduce((sum, review) => sum + parseFloat(review.ratingOfCar), 0);
        const averageRating = (totalRatings / reviews.length).toFixed(1);

        car.userRatingfromOwners = averageRating;
        await car.save();
        console.log('Car updated with new rating:', car);

        res.status(200).send({ success: true, message: "All Data saved successfully", data: newReview });
    } catch (err) {
        console.error('Error while saving review:', err);
        res.status(500).send({
            success: false,
            message: "Error while saving the data",
            error: err.message || JSON.stringify(err)
        });
    }
}

//GET ALL REVIEW FOR ADMIN PANAL
const getAllReview_forAdmin = async (req, res) => {
    try {
        const reviews = await ownersReviewModel.find({})
            .populate({ path: 'brand', select: 'name' })
            .populate({ path: 'product_id', select: 'carname' })
            .select('customerName email_id whatsAppNumber pinCode varient carNumber ratingOfCar permission createdAt');

        // Convert createdAt for each review to IST
        const formattedReviews = reviews.map(review => ({
            ...review._doc,
            createdAt: moment(review.createdAt).tz('Asia/Kolkata').format('DD MMM YYYY HH:mm:ss')
        }));

        res.status(200).send({ success: true, msg: "All Varients Retrieved", data: formattedReviews });
    } catch (error) {
        res.status(401).send({
            success: false,
            message: "Error while fetching reviews",
            error
        });
    }
}

//UPDATE PERMISSION FOR VISIBLITY IN FRONTEND
const updateReviewPermission = async (req, res) => {
    const { id } = req.params; // Get the review ID from the request parameters
    const { permission } = req.body; // Get the new permission value from the request body

    try {
        // Update the review document
        const updatedReview = await ownersReviewModel.findByIdAndUpdate(
            id,
            { permission: permission },
            { new: true } // Option to return the updated document
        );

        if (!updatedReview) {
            return res.status(404).send({
                success: false,
                message: "Review not found"
            });
        }

        // Send success response
        res.status(200).send({
            success: true,
            message: 'Review permission updated successfully',
            data: updatedReview
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error updating review permission",
            error: error.message
        });
    }
};

//DELETE REVIEW ALONG WITH ITS IMAGE
const deleteReview = async (req, res) => {
    const { id } = req.params; // Get the review ID from the request parameters

    try {
        // Find the review by ID to get the image file name
        const review = await ownersReviewModel.findById(id);

        if (!review) {
            return res.status(404).send({
                success: false,
                message: "Review not found"
            });
        }

        // Path to the image file
        const filePath = path.join(__dirname, '..', 'public', 'ownersreviewImages', review.imageOfCar);

        // Delete the image file
        fs.unlink(filePath, async (err) => {
            if (err) {
                return res.status(500).send({
                    success: false,
                    message: "Failed to delete the image file",
                    error: err.message
                });
            }

            // Delete the review from the database using Promise
            try {
                await ownersReviewModel.findByIdAndRemove(id);
                res.status(200).send({
                    success: true,
                    message: 'Review and associated image deleted successfully'
                });
            } catch (error) {
                res.status(500).send({
                    success: false,
                    message: "Error deleting the review",
                    error: error.message
                });
            }
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error processing your request",
            error: error.message
        });
    }
};

// GET REVIEWS BY CAR ID
const getReviewsByCarId = async (req, res) => {
    try {
        const carId = req.params.id; // Retrieve the car ID from the URL parameter

        // Fetch reviews that have the specified car ID in their product_id field
        const reviews = await ownersReviewModel.find({ product_id: carId, permission: "Approved" })
            .populate({ path: 'brand', select: 'name' }) // Optionally populate the brand name
            .select('customerName ratingOfCar imageOfCar whyThisCar permission') // Select only the necessary fields
            .exec(); // Execute the query

        if (reviews.length === 0) {
            return res.status(404).send({
                success: false,
                message: "No reviews found for this car"
            });
        }

        res.status(200).send({
            success: true,
            message: 'Reviews retrieved successfully',
            data: reviews
        });
    } catch (error) {
        console.error('Error fetching reviews by car ID:', error);
        res.status(500).send({
            success: false,
            message: "Error retrieving reviews",
            error: error.message
        });
    }
};

// GET REVIEW BY ID
const getReviewById = async (req, res) => {
    try {
        const reviewId = req.params.id;  // Retrieve the review ID from the URL parameter

        // Fetch the review using its ID
        const review = await ownersReviewModel.findById(reviewId)
            .populate('brand', 'name')
            .populate({ path: 'product_id', select: 'carname' })  // Optionally populate the brand name if needed
            .exec();  // Execute the query

        if (!review) {
            return res.status(404).send({
                success: false,
                message: "Review not found"
            });
        }

        res.status(200).send({
            success: true,
            message: 'Review retrieved successfully',
            data: review
        });
    } catch (error) {
        console.error('Error fetching review by ID:', error);
        res.status(500).send({
            success: false,
            message: "Error retrieving review",
            error: error.message
        });
    }
};

//CSV EXPORT FOR ALL REVIEWS
const exportOwnersReview = async (req, res) => {
    try {
        let reviews = await ownersReviewModel.find({}).populate({ path: 'brand', select: 'name' })
            .populate({ path: 'product_id', select: 'carname' });

        // Processing only reviews with a defined createdAt field
        reviews = reviews.filter(review => review.createdAt).map(review => ({
            customerName: review.customerName,
            email_id: review.email_id,
            whatsAppNumber: review.whatsAppNumber,
            mobileNumber: review.mobileNumber,
            pinCode: review.pinCode,
            profession: review.profession,
            refferedBy: review.refferedBy,
            brand: review.brand,
            product_id: review.product_id,
            year: review.year,
            varient: review.varient,
            fuelType: review.fuelType,
            transMission: review.transMission,
            carNumber: review.carNumber,
            ratingOfCar: review.ratingOfCar,
            kindOfCar: review.kindOfCar,
            approxKMdriven: review.approxKMdriven,
            modificationOfVehicle: review.modificationOfVehicle,
            whatKindofRoadDrivenon: review.whatKindofRoadDrivenon,
            howManypropleDrive: review.howManypropleDrive,
            milageinCity: review.milageinCity,
            milageInHighway: review.milageInHighway,
            overallRangeApplicableForEV: review.overallRangeApplicableForEV,
            whyThisCar: review.whyThisCar,
            keyReasons: review.keyReasons,
            featuresLearntAfterPurchaseing: review.featuresLearntAfterPurchaseing,
            thingsLackinThisCar: review.thingsLackinThisCar,
            shortlistedCar1: review.shortlistedCar1,
            shortlistedCar2: review.shortlistedCar2,
            shortlistedCar3: review.shortlistedCar3,
            issueWithCar: review.issueWithCar,
            willingToRecommende: review.willingToRecommende,
            whatsYourEmotion: review.whatsYourEmotion,
            nameOfDelership: review.nameOfDelership,
            cityAndArea: review.cityAndArea,
            raingOfDelershipExperience: review.raingOfDelershipExperience,
            whyThisDelership: review.whyThisDelership,
            didDelershipForcedtoSellanything: review.didDelershipForcedtoSellanything,
            recomendationOfDelership: review.recomendationOfDelership,
            serviceOfcarOnDelership: review.serviceOfcarOnDelership,
            haveYouServiced: review.haveYouServiced,
            differentNameOfDelership: review.differentNameOfDelership,
            tipForpeopleForService: review.tipForpeopleForService,
            shareAboutDelerchip: review.shareAboutDelerchip,
            serviceExperience: review.serviceExperience,
            approxServiceCost: review.approxServiceCost,
            yourStory: review.yourStory,
            permission: review.permission,
            createdAt: review.createdAt ? review.createdAt.toLocaleString() : 'N/A'
        }));

        const csvFields = ['customerName', 'email_id', 'whatsAppNumber', 'mobileNumber', 'pinCode', 'profession', 'refferedBy', 'brand', 'product_id',
            'year', 'varient', 'fuelType', 'transMission', 'carNumber', 'ratingOfCar', 'kindOfCar', 'approxKMdriven', 'modificationOfVehicle',
            'whatKindofRoadDrivenon', 'howManypropleDrive', 'milageinCity', 'milageInHighway', 'overallRangeApplicableForEV',
            'whyThisCar', 'keyReasons', 'featuresLearntAfterPurchaseing', 'thingsLackinThisCar', 'shortlistedCar1',
            'shortlistedCar2', 'shortlistedCar3', 'issueWithCar', 'willingToRecommende', 'whatsYourEmotion',
            'nameOfDelership', 'cityAndArea', 'raingOfDelershipExperience', 'whyThisDelership', 'didDelershipForcedtoSellanything',
            'recomendationOfDelership', 'serviceOfcarOnDelership', 'haveYouServiced', 'differentNameOfDelership',
            'tipForpeopleForService', 'shareAboutDelerchip', 'serviceExperience', 'approxServiceCost', 'yourStory', 'permission', 'createdAt'];
        const csvParser = new Parser({ fields: csvFields });
        const csvData = csvParser.parse(reviews);

        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename="ownersReviews.csv"');
        res.status(200).end(csvData);
    } catch (error) {
        console.error('Error in exportOwnersReview:', error);
        res.status(500).send({ message: error.message });
    }
};

module.exports = {
    saveReview,
    getAllReview_forAdmin,
    updateReviewPermission,
    deleteReview,
    getReviewsByCarId,
    getReviewById,
    exportOwnersReview
};
