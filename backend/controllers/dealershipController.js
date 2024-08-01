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
        fs.createReadStream(filePath)
            .pipe(csv.parse({ headers: true }))
            .on('error', error => {
                console.error(error);
                return res.status(500).json(error);
            })
            .on('data', row => {
                allRecords.push(row);
            })
            .on('end', async () => {
                console.log(`${allRecords.length} rows have been parsed.`);
                try {
                    // Loop through all records and upsert each one
                    for (const record of allRecords) {
                        await dealershipModule.updateOne(
                            { dealershipName: record.dealershipName }, // Use dealershipName as the filter criteria for upsert
                            { $set: record }, // Update
                            { upsert: true } // Upsert option
                        );
                    }
                    res.json({ message: `${allRecords.length} rows have been parsed and upserted.` });
                } catch (err) {
                    console.error(err);
                    res.status(500).json(err);
                }
            });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
}

//GET ALL DEALERSHIP LIST FOR ADMIN PANAL
const get_all_list_for_admin_delaershipList = async(req,res) =>{
    try{
        const dealershipList = await dealershipModule.find({})
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
const get_all_list_for_appandweb_delaershipList = async(req,res) =>{
    try{
        const dealershipList = await dealershipModule.find({})
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
const count_dealership_by_brand = async(req, res) =>{
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
        res.status(500).send({
            success: false,
            message: "Error while counting",
            error: error
        });
    }
}

// Function to delete a specific Delership by name
const delete_delership_by_name = async (req, res) => {
    const { dealershipName } = req.body;
    try {
        const deletionResult = await dealershipModule.deleteOne({ dealershipName: dealershipName });
        if (deletionResult.deletedCount === 0) {
            return res.status(404).json({
                success: false,
                message: "No service center found with the specified name."
            });
        }
        res.status(200).json({
            success: true,
            message: " Dealer deleted successfully."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error while deleting the service center.",
            error: error
        });
    }
}

//City and Brand Wise Delership for app and web
const get_city_wise_delershipCentres_by_brand = async (req, res) => {
    const { city, brandId } = req.body;
    try {
        const delershipCentre = await dealershipModule.find({ city: city, brand: brandId })
                                                 .populate({ path: 'brand', select: 'name' });
        if (delershipCentre.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No Delership found for the specified brand in the specified city."
            });
        }
        res.status(200).json({
            success: true,
            message: "Sales centres retrieved successfully.",
            data: delershipCentre
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
    dealershipCSVcontroller,
    get_all_list_for_admin_delaershipList,
    get_all_list_for_appandweb_delaershipList,
    count_dealership_by_brand,
    delete_delership_by_name,
    get_city_wise_delershipCentres_by_brand
};
