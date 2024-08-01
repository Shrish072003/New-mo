const mongoose = require('mongoose');

const ownersReviewSchema = mongoose.Schema ({
    customerName:{
        type: String
        
    },
    email_id:{
        type: String,
       
    },
    whatsAppNumber:{
        type: String,
        
    },
    mobileNumber:{
        type: String,
        
    },
    pinCode:{
        type: String
    },
    profession:{
        type: String
    },
    refferedBy:{
        type: String
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'brand' 
        
      },
    product_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car' 
    },
    year:{
        type: String
    },
    varient:{
        type: String
    },
    fuelType:{
        type: String
    },
    transMission:{
        type: String
    },
    carNumber:{
        type: String
    },
    ratingOfCar:{
        type: String
    },
    imageOfCar:{
        type: String
    },
    kindOfCar:{
        type: String
    },
    approxKMdriven:{
        type: String
    },
    modificationOfVehicle:{
        type: String
    },
    whatKindofRoadDrivenon:{
        type: String
    },
    howManypropleDrive:{
        type: String
    },
    milageinCity:{
        type: String
    },
    milageInHighway:{
        type: String
    },
    overallRangeApplicableForEV:{
        type: String
    },
    whyThisCar:{
        type: String
    },
    keyReasons:{
        type: String
    },
    featuresLearntAfterPurchaseing:{
        type: String
    },
    thingsLackinThisCar:{
        type: String
    },
    shortlistedCar1:{
        type: String
    },
    shortlistedCar2:{
        type: String
    },
    shortlistedCar3:{
        type: String
    },
    issueWithCar:{
        type: String
    },
    willingToRecommende:{
        type: String
    },
    whatsYourEmotion:{
        type: String
    },
    nameOfDelership:{
        type: String
    },
    cityAndArea:{
        type: String
    },
    raingOfDelershipExperience:{
        type: String
    },
    whyThisDelership:{
        type: String
    },
    didDelershipForcedtoSellanything:{
        type: String
    },
    recomendationOfDelership:{
        type: String
    },
    serviceOfcarOnDelership:{
        type: String
    },
    haveYouServiced:{
        type: String
    },
    differentNameOfDelership:{
        type: String
    },
    tipForpeopleForService:{
        type: String
    },
    shareAboutDelerchip:{
        type: String
    },
    serviceExperience:{
        type: String
    },
    approxServiceCost:{
        type: String
    },
    yourStory:{
        type: String
    },
    permission:{
        type: String,
        require: true,
        default: 'Pending'
    }

}, { timestamps: true });

module.exports = mongoose.model("ownersreview", ownersReviewSchema);
