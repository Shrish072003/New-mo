const mongoose = require('mongoose');



const fuelPriceSchema = new mongoose.Schema({
    stateId: String,
    stateName: String,
    applicableOn: Date,
    fuels: {
        petrol: {
            retailPrice: Number,
            retailPriceChange: Number,
            retailUnit: String,
            currency: String,
            retailPriceChangeInterval: String
        },
        diesel: {
            retailPrice: Number,
            retailPriceChange: Number,
            retailUnit: String,
            currency: String,
            retailPriceChangeInterval: String
        },
        lpg: {
            retailPrice: Number,
            retailPriceChange: Number,
            retailUnit: String,
            currency: String,
            retailPriceChangeInterval: String
        },
        cng: {
            retailPrice: Number,
            retailPriceChange: Number,
            retailUnit: String,
            currency: String,
            retailPriceChangeInterval: String
        }
    }
}, { timestamps: true });

// Create a model from the schema

module.exports = mongoose.model('FuelPrice', fuelPriceSchema);
