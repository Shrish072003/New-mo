const { response } = require('express');
const rtoModel = require("../models/rtodata");


const rto_data_controller = async(req, res) =>{
    try{
        const rtoData = new rtoModel({
            state : req.body.state,
            fuelType: req.body.fuelType,
            startPrice: req.body.startPrice,
            endPrice: req.body.endPrice,
            rtoPercentage: req.body.rtoPercentage,
            amount: req.body.amount,
            insurancePercentage: req.body.insurancePercentage,
            hypethecationCharges: req.body.hypethecationCharges,
            fastag: req.body.fastag,
            others: req.body.others
        });
        const newData = await rtoData.save();
        res.status(200).send({success:true, message:"RTO Data saved successfully"});
    }
    catch(error){
       res.status(500).send({
        success: false,
        error: error
       })
            
        }
    
}

//GET RTO DATA FOR ADMIN PANAL
const getallRTOdataController = async(req, res) =>{
    try{
        const allRtoData = await rtoModel.find();
        res.status(200).send({
            success: true,
            data: allRtoData
        })
    }
    catch(error){
        res.status(500).send({success: false, error: error});
    }
}

//DELETE RTO DATA FOR ADMIN PANAL BY ID
const deleteRTODataController = async (req, res) => {
    try {
        const result = await rtoModel.findByIdAndDelete(req.params.id);
        if (result) {
            res.status(200).send({ success: true, message: "RTO Data deleted successfully" });
        } else {
            res.status(404).send({ success: false, message: "RTO Data not found" });
        }
    } catch (error) {
        res.status(500).send({ success: false, error: error });
    }
};

// New function to get RTO data by state, case-insensitive
const getDataByStateController = async (req, res) => {
    const requestedState = req.body.state ? req.body.state.toLowerCase() : '';
    try {
        // Use a case-insensitive regex to find the state
        const rtoDataByState = await rtoModel.find({
            state: new RegExp('^' + requestedState + '$', 'i')
        });
        if (rtoDataByState.length > 0) {
            res.status(200).send({
                success: true,
                data: rtoDataByState
            });
        } else {
            res.status(404).send({
                success: false,
                message: "No RTO data found for the provided state"
            });
        }
    } catch (error) {
        res.status(500).send({ success: false, error: error });
    }
};


module.exports = {
    rto_data_controller,
    getallRTOdataController,
    deleteRTODataController,
    getDataByStateController
};