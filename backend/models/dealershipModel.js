const mongoose = require('mongoose');

const dealershipSchema = new mongoose.Schema({
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
    dealershipName:{
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



module.exports = mongoose.model('Dealership', dealershipSchema);