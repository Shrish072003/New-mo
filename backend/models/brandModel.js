const mongoose = require('mongoose');

const brandSchema = mongoose.Schema ({
    image:{
        type: String
        
    },
    name:{
        type: String,
        required: true
    },
    selling:{
        type: String,
        required: true
    },
    rating:{
        type: String,
        required: true
    },
    iButtonData:{
        type: String
    },
    doYouKnow:{
        type: String
    },
    salesRanking:{
        type: String
    },
    salesMonthAndYear:{
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model("brand", brandSchema);
