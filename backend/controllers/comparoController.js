const brandModel = require("../models/brandModel");
const carModel = require("../models/productModel");
const varientModel = require("../models/varientModel");





// Get all brands
const get_all_brands_forComparo = async (req, res) => {
    try {
        const brands = await brandModel.find({})
                                       .select('name'); // Modify as per your schema fields

        res.status(200).send({
            success: true,
            message: "All brands retrieved successfully",
            data: brands
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
}


//Find PRoduct by Brand ID for Comparo
const find_product_by_brandId = async(req, res) => {
    try {
        // Assuming brandId is sent as a parameter or through the body as a specific field
        const brandId = req.params.brandId || req.body.brandId; // Adjust based on actual usage
        const cars = await carModel.find({ brand: brandId })
                                    
                                    .select('carname');

        res.status(200).send({
            success: true,
            message: "Product Names Found",
            data: cars
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: error.message });
    }
}



// Find variants by product ID
const find_variants_by_productId = async (req, res) => {
    try {
        // Assuming productId is sent as a parameter
        const productId = req.params.productId || req.body.brandId; // Extract the product ID from URL parameters
        const variants = await varientModel.find({ product: productId })
                                           
                                           .select('varientName'); // Modify as per your schema fields

        res.status(200).send({
            success: true,
            message: "Variants Found",
            data: variants
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
}









module.exports = 
{find_product_by_brandId,
    find_variants_by_productId,
    get_all_brands_forComparo}