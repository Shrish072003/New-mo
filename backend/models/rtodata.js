const mongoose = require('mongoose');

const rtoSchema = mongoose.Schema({
    state:{
        type : String,
        required: true
    },
    fuelType:{
        type: String,
        required: true
    },
    vehicleType:{
        type: String,
        default:'Individual'
    },
    startPrice:{
        type: String,
        required: true
    },
    endPrice:{
        type: String,
        required: true
    },
    rtoPercentage:{
        type: String
    },
    amount:{
        type: String
    },
    insurancePercentage:{
        type: String
    },
    hypethecationCharges:{
        type: String
    },
    fastag:{
        type: String
    },
    others:{
        type: String
    }
})

module.exports = mongoose.model("rtodata", rtoSchema);