const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const brandControllerCSV = require("../models/brandModel");

const allbrandCSVcontroller = async (req, res) => {
    
    const allRecords = [];
    if (!req.file || !req.file.filename) {
        return res.status(400).json({ error: 'No file uploaded.' });
    }

    const filePath = path.join(__dirname, '../public/uploadsBrandCsv', req.file.filename);
    
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
                        await brandControllerCSV.updateOne(
                            { name: record.name }, // Use carName as the filter criteria for upsert
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

module.exports = {
    allbrandCSVcontroller
};
