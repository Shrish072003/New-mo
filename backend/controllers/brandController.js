const brand = require('../models/brandModel');
const Review = require('../models/ownersReviewModel');

const registered_brand = async (req, res) => {
    try {
        const brandData = await brand.findOne({ name: req.body.name });

        if (brandData) {
            return res.status(200).send({ success: false, message: "Brand already exists" });
        }

        const newBrand = new brand({
            image: req.file.filename,
            name: req.body.name,
            selling: req.body.selling,
            rating: req.body.rating,
            iButtonData: req.body.iButtonData,
            doYouKnow: req.body.doYouKnow,
            salesRanking: req.body.salesRanking,
            salesMonthAndYear: req.body.salesMonthAndYear
        });

        const savedBrand = await newBrand.save();

        res.status(200).send({ success: true, data: savedBrand });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const edit_brand = async (req, res) => {
    try {
        const brandId = req.params.id;

        // Check if a file is uploaded
        const updatedBrand = {
            name: req.body.name,
            selling: req.body.selling,
            rating: req.body.rating,
            rating: req.body.rating,
            iButtonData: req.body.iButtonData,
            doYouKnow: req.body.doYouKnow,
            salesRanking: req.body.salesRanking,
            salesMonthAndYear: req.body.salesMonthAndYear
        };

        if (req.file) {
            updatedBrand.image = req.file.filename;
        }

        // Use updateOne to update the document
        const result = await brand.updateOne({ _id: brandId }, { $set: updatedBrand });

        if (result.n === 0) {
            return res.status(404).send({ success: false, message: "Brand not found" });
        }

        const brandData = await brand.findById(brandId);

        res.status(200).send({ success: true, data: brandData });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

//Brand by id including Review
const get_brand_by_id = async (req, res) => {
    try {
        const brandId = req.params.id;  

        const brandData = await brand.findById(brandId);
        if (!brandData) {
            return res.status(404).send({ success: false, message: "Brand not found" });
        }

        // Fetch reviews that are related to the brand
        const reviews = await Review.find({ brand: brandId , permission: "Approved"}, 'customerName ratingOfCar imageOfCar whyThisCar permission'); // Assuming 'brand' is the field name in the Review schema that references the brand ID

        // Add the reviews to the response data
        const responseData = {
            brand: brandData,
            reviews: reviews
        };

        res.status(200).send({ success: true, data: responseData });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};


module.exports = {
    registered_brand,
    edit_brand,
    get_brand_by_id
};
