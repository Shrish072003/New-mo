const axios = require('axios');
const cron = require('node-cron');
const fuelPriceModel = require('../models/fuelpriceModel');


const fuelPricerateController = async (req, res) => {
    try {
        const response = await axios.get('https://daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com/v1/fuel-prices/today/india/states', {
            headers: {
                'X-RapidAPI-Host': 'daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.RAPIDAPI_KEY
            }
        });

        if (!response.data.statePrices) {
            console.error('Invalid API response structure:', response.data);
            return res.status(500).send('Invalid API response structure');
        }

        const statePrices = response.data.statePrices;
        await Promise.all(statePrices.map(async stateData => {
            const { stateId, stateName, applicableOn, fuel } = stateData;
            const fuelData = {
                stateId,
                stateName,
                applicableOn,
                fuels: {
                    petrol: fuel.petrol,
                    diesel: fuel.diesel,
                    lpg: fuel.lpg,
                    cng: fuel.cng
                }
            };
            return fuelPriceModel.findOneAndUpdate(
                { stateId: stateId },
                { $set: fuelData },
                { new: true, upsert: true }
            );
        }));

        res.send('Fuel prices updated successfully!');
    } catch (error) {
        console.error('Error fetching fuel prices:', error);
        res.status(500).send('Failed to update fuel prices');
    }
};

// Function to fetch and update fuel prices
const updateFuelPrices = async () => {
    try {
        const response = await axios.get('https://daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com/v1/fuel-prices/today/india/states', {
            headers: {
                'X-RapidAPI-Host': 'daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.RAPIDAPI_KEY
            }
        });

        if (!response.data.statePrices) {
            console.error('Invalid API response structure:', response.data);
            return;
        }

        const statePrices = response.data.statePrices;
        await Promise.all(statePrices.map(async stateData => {
            const { stateId, stateName, applicableOn, fuel } = stateData;
            const fuelData = {
                stateId,
                stateName,
                applicableOn,
                fuels: {
                    petrol: fuel.petrol,
                    diesel: fuel.diesel,
                    lpg: fuel.lpg,
                    cng: fuel.cng
                }
            };
            return fuelPriceModel.findOneAndUpdate(
                { stateId: stateId },
                { $set: fuelData },
                { new: true, upsert: true }
            );
        }));

        console.log('Fuel prices updated successfully!');
    } catch (error) {
        console.error('Error fetching fuel prices:', error);
    }
};

// Schedule the update to run every day at 9 AM
cron.schedule('0 9 * * *', updateFuelPrices, {
    scheduled: true,
    timezone: "Asia/Kolkata"
});

// GET method to fetch fuel prices for a specific state
const getStateFuelPrices = async (req, res) => {
    const stateId = req.params.stateId;

    try {
        const fuelData = await fuelPriceModel.findOne({ stateId: stateId });
        if (!fuelData) {
            return res.status(404).send('State not found');
        }
        res.json(fuelData);
    } catch (error) {
        console.error('Error retrieving state-wise fuel prices:', error);
        res.status(500).send('Failed to retrieve state-wise fuel prices');
    }
};

module.exports = { fuelPricerateController , getStateFuelPrices, updateFuelPrices};
