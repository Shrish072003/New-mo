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
        fs.createReadStream(filePath)
            .pipe(csv.parse({ headers: true }))
            .on('error', error => {
                console.error('CSV Parsing Error:', error);
                res.status(500).json({ error: 'Error parsing CSV file.' });
            })
            .on('data', row => {
                allRecords.push(row);
            })
            .on('end', async () => {
                console.log(`${allRecords.length} rows have been parsed.`);
                try {
                    for (const record of allRecords) {
                        await serviceModel.updateOne(
                            { address: record.address },
                            { $set: record },
                            { upsert: true }
                        );
                    }
                    res.json({ message: `${allRecords.length} rows have been parsed and upserted.` });
                } catch (err) {
                    console.error('Database Update Error:', err);
                    res.status(500).json({ error: 'Error updating database.' });
                }
            });
    } catch (err) {
        console.error('File Read Error:', err);
        res.status(500).json({ error: 'Error reading the file.' });
    }
};
//GET ALL DEALERSHIP LIST FOR ADMIN PANAL
const get_all_list_for_admin_servicecentreList = async(req,res) =>{
    try{
        const dealershipList = await serviceModel.find({})
                                                    .populate({ path: 'brand', select: 'name' })

    res.status(200).send({ success: true, message: "All Dealership Retrieved", data: dealershipList });

    }
    catch(error){
        res.status(500).send({
            success: false,
            message: "Error while fetching list of dealerships",
            data: error
        })
    }
}

//Get All List of Dealership for app and web
const get_all_list_for_appandweb_servicecentreList = async(req,res) =>{
    try{
        const dealershipList = await serviceModel.find({})
                                                    .populate({ path: 'brand', select: 'name' })

    res.status(200).send({ success: true, message: "All Dealership Retrieved", data: dealershipList });

    }
    catch(error){
        res.status(500).send({
            success: false,
            message: "Error while fetching list of dealerships",
            data: error
        })
    }
}

// Function to count dealerships by a specific brand ID
const count_serviceCentre_by_brand = async(req, res) =>{
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
        res.status(500).send({
            success: false,
            message: "Error while counting",
            error: error
        });
    }
}

// Function to delete a specific service center by name
const delete_serviceCentre_by_name = async (req, res) => {
    const { serviceCentreName } = req.body;
    try {
        const deletionResult = await serviceModel.deleteOne({ serviceCentreName: serviceCentreName });
        if (deletionResult.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "No service center found with the specified name."
            });
        }
        res.status(200).json({
            success: true,
            message: "Service center deleted successfully."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error while deleting the service center.",
            error: error
        });
    }
}


// Function to get city-wise service centres || APP & WEB
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