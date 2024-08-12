const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const dealershipModule = require('../models/dealershipModel');

const dealershipCSVcontroller = async (req, res) => {
    const allRecords = [];
    if (!req.file || !req.file.filename) {
        return res.status(400).json({ error: 'No file uploaded.' });
    }

    const filePath = path.join(__dirname, '../public/uploadDealershipCsv', req.file.filename);
    
    try {
        const fileStream = fs.createReadStream(filePath)
            .pipe(csv.parse({ headers: true }))
            .on('error', error => {
                console.error('Error during CSV parsing:', error);
                // It's important to ensure the error is only logged here
                // The response should be handled outside of this stream handling
            })
            .on('data', row => {
                allRecords.push(row);
            })
            .on('end', async () => {
                console.log(`${allRecords.length} rows have been parsed.`);
                try {
                    // Upsert each record into the database
                    for (const record of allRecords) {
                        await dealershipModule.updateOne(
                            { address: record.address }, // Use address as the unique identifier
                            { $set: record }, // Update existing records with new data
                            { upsert: true } // Insert if not exists
                        );
                    }
                    // Optionally delete the file after processing
                    fs.unlinkSync(filePath);
                    res.json({ message: `${allRecords.length} rows have been parsed and upserted.` });
                } catch (err) {
                    console.error('Error during database upsert:', err);
                    res.status(500).json({ error: 'Error while upserting records.', details: err });
                }
            });

        // If there's any error during file handling or streaming
        fileStream.on('error', (streamError) => {
            console.error('Error during file handling:', streamError);
            res.status(500).json({ error: 'File handling error.', details: streamError });
        });

    } catch (err) {
        console.error('Error during file processing:', err);
        res.status(500).json({ error: 'Unexpected server error.', details: err });
    }
}

// GET ALL DEALERSHIP LIST FOR ADMIN PANEL
const get_all_list_for_admin_dealershipList = async (req, res) => {
    try {
        const dealershipList = await dealershipModule.find({})
            .populate({ path: 'brand', select: 'name' });

        res.status(200).send({ success: true, message: "All Dealerships Retrieved", data: dealershipList });
    } catch (error) {
        console.error('Error while fetching list of dealerships:', error);
        res.status(500).send({
            success: false,
            message: "Error while fetching list of dealerships",
            data: error
        });
    }
}

// GET ALL LIST OF DEALERSHIPS FOR APP AND WEB
const get_all_list_for_appandweb_dealershipList = async (req, res) => {
    try {
        const dealershipList = await dealershipModule.find({})
            .populate({ path: 'brand', select: 'name' });

        res.status(200).send({ success: true, message: "All Dealerships Retrieved", data: dealershipList });
    } catch (error) {
        console.error('Error while fetching list of dealerships:', error);
        res.status(500).send({
            success: false,
            message: "Error while fetching list of dealerships",
            data: error
        });
    }
}

// Function to count dealerships by a specific brand ID
const count_dealership_by_brand = async (req, res) => {
    try {
        const { brandId, city } = req.body;
        let total_data;

        if (city) {
            total_data = await dealershipModule.find({ brand: brandId, city: city }).countDocuments();
            res.status(200).send({
                success: true,
                message: `Total count by brand and city`,
                data: total_data
            });
        } else {
            total_data = await dealershipModule.find({ brand: brandId }).countDocuments();
            res.status(200).send({
                success: true,
                message: `Total count by brand`,
                data: total_data
            });
        }
    } catch (error) {
        console.error('Error while counting dealerships:', error);
        res.status(500).send({
            success: false,
            message: "Error while counting dealerships",
            error: error
        });
    }
}

// Function to delete a specific Dealership by name
const delete_dealership_by_name = async (req, res) => {
    const { dealershipName } = req.body;
    try {
        const deletionResult = await dealershipModule.deleteOne({ dealershipName: dealershipName });
        if (deletionResult.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "No dealership found with the specified name."
            });
        }
        res.status(200).json({
            success: true,
            message: "Dealership deleted successfully."
        });
    } catch (error) {
        console.error('Error while deleting the dealership:', error);
        res.status(500).json({
            success: false,
            message: "Error while deleting the dealership.",
            error: error
        });
    }
}

// City and Brand Wise Dealership for app and web
const get_city_wise_dealershipCentres_by_brand = async (req, res) => {
    const { city, brandId } = req.body;
    try {
        const dealershipCentre = await dealershipModule.find({ city: city, brand: brandId })
            .populate({ path: 'brand', select: 'name' });
        if (dealershipCentre.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No Dealership found for the specified brand in the specified city."
            });
        }
        res.status(200).json({
            success: true,
            message: "Dealership centres retrieved successfully.",
            data: dealershipCentre
        });
    } catch (error) {
        console.error('Error while fetching dealership centres:', error);
        res.status(500).json({
            success: false,
            message: "Error while fetching dealership centres.",
            error: error
        });
    }
}

module.exports = {
    dealershipCSVcontroller,
    get_all_list_for_admin_dealershipList,
    get_all_list_for_appandweb_dealershipList,
    count_dealership_by_brand,
    delete_dealership_by_name,
    get_city_wise_dealershipCentres_by_brand
};
