const mongoose = require('mongoose');

const serviceCentreSchema = new mongoose.Schema({
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'brand' 
        
      },
    state:{
        type: String
    },
    city:{
        type: String
    },
    serviceCentreName:{
        type: String
    },
    address:{
        type: String
    },
    email:{
        type: String
    },
    phone: {
        type: String
    },
    website:{
        type: String
    }
})



module.exports = mongoose.model('Servicecentre', serviceCentreSchema);