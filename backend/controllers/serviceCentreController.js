const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const serviceModel = require("../models/servicecentreModel");

const serviceCentreCSVcontroller = async (req, res) => {
    const allRecords = [];
    if (!req.file || !req.file.filename) {
        return res.status(400).json({ error: 'No file uploaded.' });
    }

    const filePath = path.join(__dirname, '../public/uploadserviceCsv', req.file.filename);
    
    try {
        const fileStream = fs.createReadStream(filePath)
            .pipe(csv.parse({ headers: true }))
            .on('error', error => {
                console.error('CSV Parsing Error:', error);
                // Log the error but do not attempt to send a response here
            })
            .on('data', row => {
                allRecords.push(row);
            })
            .on('end', async () => {
                console.log(`${allRecords.length} rows have been parsed.`);
                try {
                    for (const record of allRecords) {
                        await serviceModel.updateOne(
                            { address: record.address },  // Use address as the unique identifier
                            { $set: record },  // Update with new data
                            { upsert: true }  // Insert if not exists
                        );
                    }
                    // Optionally delete the file after processing
                    fs.unlinkSync(filePath);
                    res.json({ message: `${allRecords.length} rows have been parsed and upserted.` });
                } catch (err) {
                    console.error('Database Update Error:', err);
                    res.status(500).json({ error: 'Error updating database.', details: err });
                }
            });

        // Handle stream errors
        fileStream.on('error', (streamError) => {
            console.error('Error during file handling:', streamError);
            res.status(500).json({ error: 'File handling error.', details: streamError });
        });

    } catch (err) {
        console.error('File Read Error:', err);
        res.status(500).json({ error: 'Error reading the file.', details: err });
    }
};

// GET ALL SERVICE CENTRE LIST FOR ADMIN PANEL
const get_all_list_for_admin_servicecentreList = async (req, res) => {
    try {
        const serviceCentreList = await serviceModel.find({})
            .populate({ path: 'brand', select: 'name' });

        res.status(200).send({ success: true, message: "All Service Centres Retrieved", data: serviceCentreList });
    } catch (error) {
        console.error('Error while fetching list of service centres:', error);
        res.status(500).send({
            success: false,
            message: "Error while fetching list of service centres",
            data: error
        });
    }
}

// GET ALL SERVICE CENTRE LIST FOR APP AND WEB
const get_all_list_for_appandweb_servicecentreList = async (req, res) => {
    try {
        const serviceCentreList = await serviceModel.find({})
            .populate({ path: 'brand', select: 'name' });

        res.status(200).send({ success: true, message: "All Service Centres Retrieved", data: serviceCentreList });
    } catch (error) {
        console.error('Error while fetching list of service centres:', error);
        res.status(500).send({
            success: false,
            message: "Error while fetching list of service centres",
            data: error
        });
    }
}

// Function to count service centres by a specific brand ID
const count_serviceCentre_by_brand = async (req, res) => {
    try {
        const { brandId, city } = req.body;
        let total_data;

        if (city) {
            total_data = await serviceModel.find({ brand: brandId, city: city }).countDocuments();
            res.status(200).send({
                success: true,
                message: `Total count by brand and city`,
                data: total_data
            });
        } else {
            total_data = await serviceModel.find({ brand: brandId }).countDocuments();
            res.status(200).send({
                success: true,
                message: `Total count by brand`,
                data: total_data
            });
        }
    } catch (error) {
        console.error('Error while counting service centres:', error);
        res.status(500).send({
            success: false,
            message: "Error while counting service centres",
            error: error
        });
    }
}

// Function to delete a specific service centre by name
const delete_serviceCentre_by_name = async (req, res) => {
    const { serviceCentreName } = req.body;
    try {
        const deletionResult = await serviceModel.deleteOne({ serviceCentreName: serviceCentreName });
        if (deletionResult.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "No service centre found with the specified name."
            });
        }
        res.status(200).json({
            success: true,
            message: "Service centre deleted successfully."
        });
    } catch (error) {
        console.error('Error while deleting the service centre:', error);
        res.status(500).json({
            success: false,
            message: "Error while deleting the service centre.",
            error: error
        });
    }
}

// Function to get city-wise service centres by brand || APP & WEB
const get_city_wise_serviceCentres_by_brand = async (req, res) => {
    const { city, brandId } = req.body;
    try {
        const serviceCentres = await serviceModel.find({ city: city, brand: brandId })
            .populate({ path: 'brand', select: 'name' });
        if (serviceCentres.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No service centres found for the specified brand in the specified city."
            });
        }
        res.status(200).json({
            success: true,
            message: "Service centres retrieved successfully.",
            data: serviceCentres
        });
    } catch (error) {
        console.error('Error while fetching service centres:', error);
        res.status(500).json({
            success: false,
            message: "Error while fetching service centres.",
            error: error
        });
    }
}

module.exports = {
    serviceCentreCSVcontroller,
    get_all_list_for_admin_servicecentreList,
    get_all_list_for_appandweb_servicecentreList,
    count_serviceCentre_by_brand,
    delete_serviceCentre_by_name,
    get_city_wise_serviceCentres_by_brand
};
