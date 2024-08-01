const express = require('express');
const multer = require('multer');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

const app = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const Car = require('../models/productModel'); // Adjust the path as per your project structure
const car_data = require("../controllers/productController");

const uploadDir = path.join(__dirname, '..', 'public', 'productImages');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 500 // 5 MB file size limit
    }
}).fields([
    { name: 'heroimage', maxCount: 1 },
    { name: 'grayimage', maxCount: 1 },
    { name: 'redimage', maxCount: 1 },
    { name: 'greenimage', maxCount: 1 },
    { name: 'blueimage', maxCount: 1 },
    { name: 'blackimage', maxCount: 1 },
    { name: 'creamimage', maxCount: 1 },
    { name: 'brownimage', maxCount: 1 },
    { name: 'yellowimage', maxCount: 1 },
    { name: 'purpleimage', maxCount: 1 },
    { name: 'whiteimage', maxCount: 1 },
    { name: 'carbrowsher', maxCount: 1 },
    { name: 'keyF1', maxCount: 1 },
    { name: 'keyF2', maxCount: 1 },
    { name: 'keyF3', maxCount: 1 },
    { name: 'keyF4', maxCount: 1 },
    { name: 'keyF5', maxCount: 1 },
    { name: 'keyF6', maxCount: 1 },
    { name: 'keyF7', maxCount: 1 },
    { name: 'keyF8', maxCount: 1 },
    { name: 'keyF9', maxCount: 1 },
    { name: 'keyF10', maxCount:1},
    { name: 'keyF11', maxCount: 1},
    { name: 'keyF12', maxCount: 1},
    { name: 'keyF13', maxCount: 1},
    { name : 'keyF14', maxCount: 1},
    { name: 'keyF15', maxCount: 1},
    { name: 'keyF16', maxCount: 1},
    { name: 'keyF17', maxCount: 1},
    { name: 'keyF18', maxCount: 1},
    { name: 'keyF19', maxCount: 1},
    { name: 'keyF20', maxCount: 1},
    { name: 'spaceC1', maxCount: 1 },
    { name: 'spaceC2', maxCount: 1 },
    { name: 'spaceC3', maxCount: 1 },
    { name: 'spaceC4', maxCount: 1 },
    { name: 'spaceC5', maxCount: 1 },
    { name: 'spaceC6', maxCount: 1 },
    { name: 'spaceC7', maxCount: 1 },
    { name: 'spaceC8', maxCount: 1 },
    { name: 'spaceC9', maxCount: 1 },
    { name: 'spaceC10', maxCount:1},
    { name: 'spaceC11', maxCount: 1},
    { name: 'spaceC12', maxCount: 1},
    { name: 'spaceC13', maxCount: 1},
    { name : 'spaceC14', maxCount: 1},
    { name: 'spaceC15', maxCount: 1},
    { name: 'spaceC16', maxCount: 1},
    { name: 'spaceC17', maxCount: 1},
    { name: 'spaceC18', maxCount: 1},
    { name: 'spaceC19', maxCount: 1},
    { name: 'spaceC20', maxCount: 1},
    { name: 'storageC1', maxCount: 1 },
    { name: 'storageC2', maxCount: 1 },
    { name: 'storageC3', maxCount: 1 },
    { name: 'storageC4', maxCount: 1 },
    { name: 'storageC5', maxCount: 1 },
    { name: 'storageC6', maxCount: 1 },
    { name: 'storageC7', maxCount: 1 },
    { name: 'storageC8', maxCount: 1 },
    { name: 'storageC9', maxCount: 1 },
    { name: 'storageC10', maxCount:1},
    { name: 'storageC11', maxCount: 1},
    { name: 'storageC12', maxCount: 1},
    { name: 'storageC13', maxCount: 1},
    { name : 'storageC14', maxCount: 1},
    { name: 'storageC15', maxCount: 1},
    { name: 'storageC16', maxCount: 1},
    { name: 'storageC17', maxCount: 1},
    { name: 'storageC18', maxCount: 1},
    { name: 'storageC19', maxCount: 1},
    { name: 'storageC20', maxCount: 1}
]);

app.post('/cars',  (req, res ) => {
  
    upload(req, res, async (error) => {
        if (error) {
            // Handle Multer error here
            return res.status(400).send(error.message);
        }

        try {
           
            const newCar = new Car({
        brand: req.body.brand,
        carname: req.body.carname,
        // sellingsince: req.body.sellingsince,//update k bad isko hata dena
        salesranking:req.body.salesranking,
        launchedinput:req.body.launchedinput,
        movrating: req.body.movrating,
        bodytype: req.body.bodytype,
        subbodytype: req.body.subbodytype,
        active: req.body.active,
        // active: req.body.active === 'true',
        heroimage: req.files["heroimage"]
          ? req.files["heroimage"][0].filename
          : undefined,
        heroimagename: req.body.heroimagename,
        grayimage: req.files["grayimage"]
          ? req.files["grayimage"][0].filename
          : undefined,
        grayname: req.body.grayname,
        redimage: req.files["redimage"]
          ? req.files["redimage"][0].filename
          : undefined,
        redname: req.body.redname,
        blueimage: req.files["blueimage"]
          ? req.files["blueimage"][0].filename
          : undefined,
        blueimagename: req.body.blueimagename,
        blackimage: req.files["blackimage"]
          ? req.files["blackimage"][0].filename
          : undefined,
        blackimagename: req.body.blackimagename,
        greenimage: req.files["greenimage"]
          ? req.files["greenimage"][0].filename
          : undefined,
        greenimagename: req.body.greenimagename,
        creamimage: req.files["creamimage"]
          ? req.files["creamimage"][0].filename
          : undefined,
        creamimagename: req.body.creamimagename,
        brownimage: req.files["brownimage"]
          ? req.files["brownimage"][0].filename
          : undefined,
        brownimagename: req.body.brownimagename,
        yellowimage: req.files["yellowimage"]
          ? req.files["yellowimage"][0].filename
          : undefined,
        yellowimagename: req.body.yellowimagename,
        purpleimage: req.files["purpleimage"]
          ? req.files["purpleimage"][0].filename
          : undefined,
        purpleimagename: req.body.purpleimagename,
        whiteimage: req.files["whiteimage"]
          ? req.files["whiteimage"][0].filename
          : undefined,
        whitename: req.body.whitename,
        seater: req.body.seater,
        fueltype: req.body.fueltype,
        transmissiontype: req.body.transmissiontype,
        NCAP: req.body.NCAP,
        upcoming: req.body.upcoming,
        itext: req.body.itext,
        carbrowsher: req.files["carbrowsher"]
          ? req.files["carbrowsher"][0].filename
          : undefined,
        pro: req.body.pro,
        cons: req.body.cons,
        asliheader1: req.body.asliheader1,
        aslisummary1: req.body.aslisummary1,
        engineh1: req.body.engineh1,
        engineh2: req.body.engineh2,
        enginesummary1: req.body.enginesummary1,
        engineauto1: req.body.engineauto1,
        engineimt1: req.body.engineimt1,
        enginemanual1: req.body.enginemanual1,
        engineh2a: req.body.engineh2a,
        engineh21: req.body.engineh21,
        enginesummary2: req.body.enginesummary2,
        engineauto2: req.body.engineauto2,
        engineimt2: req.body.engineimt2,
        enginemanual2: req.body.enginemanual2,
        engineh3: req.body.engineh3,
        engineh31: req.body.engineh31,
        enginesummary3: req.body.enginesummary3,
        engineauto3: req.body.engineauto3,
        engineimt3: req.body.engineimt3,
        enginemanual3: req.body.enginemanual3,
        engineh4: req.body.engineh4,
        engineh41: req.body.engineh41,
        enginesummary4: req.body.enginesummary4,
        engineauto4: req.body.engineauto4,
        engineimt4: req.body.engineimt4,
        enginemanual4: req.body.enginemanual4,
        standard: req.body.standard,
        extended: req.body.extended,
        Service: req.body.Service,
        keyF1 : req.files['keyF1'] ? req.files['keyF1'][0].filename : undefined,
        keyF1text: req.body.keyF1text,
        keyF2 : req.files['keyF2'] ? req.files['keyF2'][0].filename : undefined,
        keyF2text: req.body.keyF2text,
        keyF3 : req.files['keyF3'] ? req.files['keyF3'][0].filename : undefined,
        keyF3text: req.body.keyF3text,
        keyF4 : req.files['keyF4'] ? req.files['keyF4'][0].filename : undefined,
        keyF4text: req.body.keyF4text,
        keyF5 : req.files['keyF5'] ? req.files['keyF5'][0].filename : undefined,
        keyF5text: req.body.keyF5text,
        keyF6 : req.files['keyF6'] ? req.files['keyF6'][0].filename : undefined,
        keyF6text: req.body.keyF6text,
        keyF7 : req.files['keyF7'] ? req.files['keyF7'][0].filename : undefined,
        keyF7text: req.body.keyF7text,
        keyF8 : req.files['keyF8'] ? req.files['keyF8'][0].filename : undefined,
        keyF8text: req.body.keyF8text,
        keyF9 : req.files['keyF9'] ? req.files['keyF9'][0].filename : undefined,
        keyF9text: req.body.keyF9text,
        keyF10 : req.files['keyF10'] ? req.files['keyF10'][0].filename : undefined,
        keyF10text: req.body.keyF10text,
        keyF11: req.files['keyF11'] ? req.files['keyF11'][0].filename : undefined,
        keyF11text: req.body.keyF11text,
        keyF12: req.files['keyF12'] ? req.files['keyF12'][0].filename : undefined,
        keyF12text: req.body.keyF12text,
        keyF13: req.files['keyF13'] ? req.files['keyF13'][0].filename : undefined,
        keyF13text: req.body.keyF13text,
        keyF14: req.files['keyF14'] ? req.files['keyF14'][0].filename : undefined,
        keyF14text: req.body.keyF14text,
        keyF15: req.files['keyF15'] ? req.files['keyF15'][0].filename : undefined,
        keyF15text: req.body.keyF15text,
        keyF16: req.files['keyF16'] ? req.files['keyF16'][0].filename : undefined,
        keyF16text: req.body.keyF16text,
        keyF17: req.files['keyF17'] ? req.files['keyF17'][0].filename : undefined,
        keyF17text: req.body.keyF17text,
        keyF18: req.files['keyF18'] ? req.files['keyF18'][0].filename : undefined,
        keyF18text: req.body.keyF18text,
        keyF19: req.files['keyF19'] ? req.files['keyF19'][0].filename : undefined,
        keyF19text: req.body.keyF19text,
        keyF20: req.files['keyF20'] ? req.files['keyF20'][0].filename : undefined,
        keyF20text: req.body.keyF20text,
        spaceC1 : req.files['spaceC1'] ? req.files['spaceC1'][0].filename : undefined,
        spaceC1text: req.body.spaceC1text,
        spaceC2 : req.files['spaceC2'] ? req.files['spaceC2'][0].filename : undefined,
        spaceC2text: req.body.spaceC2text,
        spaceC3 : req.files['spaceC3'] ? req.files['spaceC3'][0].filename : undefined,
        spaceC3text: req.body.spaceC3text,
        spaceC4 : req.files['spaceC4'] ? req.files['spaceC4'][0].filename : undefined,
        spaceC4text: req.body.spaceC4text,
        spaceC5 : req.files['spaceC5'] ? req.files['spaceC5'][0].filename : undefined,
        spaceC5text: req.body.spaceC5text,
        spaceC6 : req.files['spaceC6'] ? req.files['spaceC6'][0].filename : undefined,
        spaceC6text: req.body.spaceC6text,
        spaceC7 : req.files['spaceC7'] ? req.files['spaceC7'][0].filename : undefined,
        spaceC7text: req.body.spaceC7text,
        spaceC8 : req.files['spaceC8'] ? req.files['spaceC8'][0].filename : undefined,
        spaceC8text: req.body.spaceC8text,
        spaceC9 : req.files['spaceC9'] ? req.files['spaceC9'][0].filename : undefined,
        spaceC9text: req.body.spaceC9text,
        spaceC10 : req.files['spaceC10'] ? req.files['spaceC10'][0].filename : undefined,
        spaceC10text: req.body.spaceC10text,
        spaceC11: req.files['spaceC11'] ? req.files['spaceC11'][0].filename : undefined,
        spaceC11text: req.body.spaceC11text,
        spaceC12: req.files['spaceC12'] ? req.files['spaceC12'][0].filename : undefined,
        spaceC12text: req.body.spaceC12text,
        spaceC13: req.files['spaceC13'] ? req.files['spaceC13'][0].filename : undefined,
        spaceC13text: req.body.spaceC13text,
        spaceC14: req.files['spaceC14'] ? req.files['spaceC14'][0].filename : undefined,
        spaceC14text: req.body.spaceC14text,
        spaceC15: req.files['spaceC15'] ? req.files['spaceC15'][0].filename : undefined,
        spaceC15text: req.body.spaceC15text,
        spaceC16: req.files['spaceC16'] ? req.files['spaceC16'][0].filename : undefined,
        spaceC16text: req.body.spaceC16text,
        spaceC17: req.files['spaceC17'] ? req.files['spaceC17'][0].filename : undefined,
        spaceC17text: req.body.spaceC17text,
        spaceC18: req.files['spaceC18'] ? req.files['spaceC18'][0].filename : undefined,
        spaceC18text: req.body.spaceC18text,
        spaceC19: req.files['spaceC19'] ? req.files['spaceC19'][0].filename : undefined,
        spaceC19text: req.body.spaceC19text,
        spaceC20: req.files['spaceC20'] ? req.files['spaceC20'][0].filename : undefined,
        spaceC20text: req.body.spaceC20text,
        storageC1 : req.files['storageC1'] ? req.files['storageC1'][0].filename : undefined,
        storageC1text: req.body.storageC1text,
        storageC2 : req.files['storageC2'] ? req.files['storageC2'][0].filename : undefined,
        storageC2text: req.body.storageC2text,
        storageC3 : req.files['storageC3'] ? req.files['storageC3'][0].filename : undefined,
        storageC3text: req.body.storageC3text,
        storageC4 : req.files['storageC4'] ? req.files['storageC4'][0].filename : undefined,
        storageC4text: req.body.storageC4text,
        storageC5 : req.files['storageC5'] ? req.files['storageC5'][0].filename : undefined,
        storageC5text: req.body.storageC5text,
        storageC6 : req.files['storageC6'] ? req.files['storageC6'][0].filename : undefined,
        storageC6text: req.body.storageC6text,
        storageC7 : req.files['storageC7'] ? req.files['storageC7'][0].filename : undefined,
        storageC7text: req.body.storageC7text,
        storageC8 : req.files['storageC8'] ? req.files['storageC8'][0].filename : undefined,
        storageC8text: req.body.storageC8text,
        storageC9 : req.files['storageC9'] ? req.files['storageC9'][0].filename : undefined,
        storageC9text: req.body.storageC9text,
        storageC10 : req.files['storageC10'] ? req.files['storageC10'][0].filename : undefined,
        storageC10text: req.body.storageC10text,
        storageC11: req.files['storageC11'] ? req.files['storageC11'][0].filename : undefined,
        storageC11text: req.body.storageC11text,
        storageC12: req.files['storageC12'] ? req.files['storageC12'][0].filename : undefined,
        storageC12text: req.body.storageC12text,
        storageC13: req.files['storageC13'] ? req.files['storageC13'][0].filename : undefined,
        storageC13text: req.body.storageC13text,
        storageC14: req.files['storageC14'] ? req.files['storageC14'][0].filename : undefined,
        storageC14text: req.body.storageC14text,
        storageC15: req.files['storageC15'] ? req.files['storageC15'][0].filename : undefined,
        storageC15text: req.body.storageC15text,
        storageC16: req.files['storageC16'] ? req.files['storageC16'][0].filename : undefined,
        storageC16text: req.body.storageC16text,
        storageC17: req.files['storageC17'] ? req.files['storageC17'][0].filename : undefined,
        storageC17text: req.body.storageC17text,
        storageC18: req.files['storageC18'] ? req.files['storageC18'][0].filename : undefined,
        storageC18text: req.body.storageC18text,
        storageC19: req.files['storageC19'] ? req.files['storageC19'][0].filename : undefined,
        storageC19text: req.body.storageC19text,
        storageC20: req.files['storageC20'] ? req.files['storageC20'][0].filename : undefined,
        storageC20text: req.body.storageC20text

      });

            const savedCar = await newCar.save();
            res.status(201).send(savedCar);
        } catch (error) {
            console.error('Error in creating car:', error);
            res.status(400).send(error);
        }
    });
});

//getall
const Variant = require('../models/varientModel');

app.get("/allproducts/mo", async (req, res) => {
  try {
    // Find all cars that are not upcoming
    const cars = await Car.find({ upcoming: { $ne: "true" }}).populate('brand');
    
    // For each car, find the variants with the lowest and highest Ex-showroom prices
    const carsWithPrices = await Promise.all(cars.map(async (car) => {
      const [lowestPriceVariant, highestPriceVariant] = await Promise.all([
        Variant.find({ product_id: car._id, active: true })
               .sort({ exShowroomPrice: 1 }) // Sort by exShowroomPrice in ascending order
               .limit(1) // Limit to the first (lowest price) document
               .lean(), // Convert mongoose document to plain JavaScript object
        Variant.find({ product_id: car._id, active: true })
               .sort({ exShowroomPrice: -1 }) // Sort by exShowroomPrice in descending order
               .limit(1) // Limit to the first (highest price) document
               .lean() // Convert mongoose document to plain JavaScript object
      ]);

      return {
        ...car.toObject(), // Convert the car document to a plain JavaScript object
        lowestExShowroomPrice: lowestPriceVariant.length > 0 ? lowestPriceVariant[0].exShowroomPrice : null,
        highestExShowroomPrice: highestPriceVariant.length > 0 ? highestPriceVariant[0].exShowroomPrice : null
      };
    }));

    res.json(carsWithPrices);
  } catch (err) {
    console.error('Error in fetching cars with variant prices:', err);
    res.status(500).json({ message: 'Error retrieving cars and their variant prices' });
  }
});


// Additional routes can be added here
//NEw-est car data for FEATURED SECTION
app.get('/cars/newest', async (req, res) => {
  try {
    const cars = await Car.find({ active: true })
                         .sort({ createdAt: -1 })
                         .populate('brand')
                         .select('heroimage brand carname fueltype seater NCAP transmissiontype userRatingfromOwners active')
                         .limit(30); // Adjust the limit as needed

    if (!cars || cars.length === 0) {
      return res.status(404).send({ message: 'No cars found' });
    }

    
    const carsWithLowestPrice = await Promise.all(cars.map(async (car) => {
      const lowestPriceVariant = await Variant.find({ product_id: car._id , active: true})
                                              .sort({ exShowroomPrice: 1 }) 
                                              .limit(1) 
                                              .lean(); 

      return {
        ...car.toObject(), 
        lowestExShowroomPrice: lowestPriceVariant.length > 0 ? lowestPriceVariant[0].exShowroomPrice : null
      };
    }));

    res.status(200).send(carsWithLowestPrice);
  } catch (error) {
    console.error('Error in fetching cars:', error);
    res.status(500).send({ message: 'Error retrieving cars' });
  }
});

// GET route to fetch upcoming cars with specific fields and populated brand
app.get('/cars/upcoming', async (req, res) => {
  try {
    const upcomingCars = await Car.find({ upcoming: true , active: true })
                                  .populate('brand')
                                  .select('heroimage brand carname fueltype seater NCAP transmissiontype active userRatingfromOwners');

    if (!upcomingCars || upcomingCars.length === 0) {
      return res.status(404).send({ message: 'No upcoming cars found' });
    }

    // For each upcoming car, find the variant with the lowest Ex-showroom price
    const upcomingCarsWithLowestPrice = await Promise.all(upcomingCars.map(async (car) => {
      const lowestPriceVariant = await Variant.find({ product_id: car._id , active: true})
                                              .sort({ exShowroomPrice: 1 }) 
                                              .limit(1) 
                                              .lean(); 

      return {
        ...car.toObject(), 
        lowestExShowroomPrice: lowestPriceVariant.length > 0 ? lowestPriceVariant[0].exShowroomPrice : null
      };
    }));

    res.status(200).send(upcomingCarsWithLowestPrice);
  } catch (error) {
    console.error('Error in fetching upcoming cars:', error);
    res.status(500).send({ message: 'Error retrieving upcoming cars' });
  }
});
// GET route to fetch a single product by ID
// app.get('/cars/:id', async (req, res) => {
//   try {
//     const id = req.params.id; 
//     const car = await Car.findById(id).populate('brand'); 

//     if (!car) {
//       return res.status(404).send({ message: 'Car not found' });
//     }

//     // Fetch the lowest and highest price variants - these are already correct.
//     const lowestPriceVariant = await Variant.find({ product_id: car._id })
//                                             .sort({ exShowroomPrice: 1 })
//                                             .limit(1) 
//                                             .lean(); 

//     const highestPriceVariant = await Variant.find({ product_id: car._id })
//                                              .sort({ exShowroomPrice: -1 }) 
//                                              .limit(1)
//                                              .lean(); 

//     // Fetch all variants for the mileage data
//     const allVariants = await Variant.find({ product_id: car._id })
//                                  .select('Engine_Name_Variant Company_Claimed City_Real_World Highway_Real_World exShowroomPrice')
//                                  .lean();
//  // Make sure to call .lean() to get plain JavaScript objects

//     // Now you can map over allVariants because it's an array
//     const variantsWithMileage = allVariants.map(variant => ({
//       Engine_Name_Variant: variant.Engine_Name_Varient,
//       Company_Claimed: variant.Company_Claimed,
//       City_Real_World: variant.City_Real_World,
//       Highway_Real_World: variant.Highway_Real_World,
//       ExShowroomPrice: variant.exShowroomPrice 
//     }));

//     // Include lowest and highest variant prices in the response
//     const carWithVariantPrices = {
//       ...car.toObject(),
//       lowestExShowroomPrice: lowestPriceVariant.length > 0 ? lowestPriceVariant[0].exShowroomPrice : null,
//       highestExShowroomPrice: highestPriceVariant.length > 0 ? highestPriceVariant[0].exShowroomPrice : null,
//       variantsWithMileage // This now correctly includes mileage data for each variant
//     };

//     res.status(200).send(carWithVariantPrices);
//   } catch (error) {
//     console.error('Error in fetching car:', error);
//     res.status(500).send({ message: 'Error retrieving car' });
//   }
// });

//Timepass

app.get('/cars/:id', async (req, res) => {
  try {
    const carId = req.params.id;
    const car = await Car.findById(carId).populate('brand');

    if (!car) {
      return res.status(404).send({ message: 'Car not found' });
    }

    const allVariants = await Variant.find({ product_id: carId, active: true }).lean();

    const prices = allVariants.map(variant => variant.exShowroomPrice);
    const lowestExShowroomPrice = Math.min(...prices);
    const highestExShowroomPrice = Math.max(...prices);

    // Use a map to ensure unique variants based on the criteria
    const uniqueVariants = {};
    allVariants.forEach(variant => {
      const key = `${variant.Engine_Name_Varient}-${variant.Company_Claimed}-${variant.City_Real_World}-${variant.Highway_Real_World}`;
      uniqueVariants[key] = {
        Engine_Name_Variant: variant.Engine_Name_Varient,
        Company_Claimed: variant.Company_Claimed,
        City_Real_World: variant.City_Real_World,
        Highway_Real_World: variant.Highway_Real_World
      };
    });

    const variantsWithMileage = Object.values(uniqueVariants);

    const response = {
      ...car.toObject(),
      lowestExShowroomPrice,
      highestExShowroomPrice,
      variantsWithMileage
    };

    res.status(200).json(response);
  } catch (error) {
    console.error('Error fetching car details:', error);
    res.status(500).send({ message: 'Error retrieving car details' });
  }
});



//Car by brands
app.get('/cars/brand/:brandId', async (req, res) => {
  try {
    const brandId = req.params.brandId; // Extract the brand ID from the URL
    const cars = await Car.find({ brand: brandId , active: true}).populate('brand').select('heroimage brand carname fueltype seater NCAP active transmissiontype userRatingfromOwners'); // Find cars by brand ID

    if (cars.length === 0) {
      return res.status(404).send({ message: 'No cars found for the specified brand' });
    }

    
    const carsWithLowestPrice = await Promise.all(cars.map(async (car) => {
      const lowestPriceVariant = await Variant.find({ product_id: car._id , active: true })
                                              .sort({ exShowroomPrice: 1 }) 
                                              .limit(1) 
                                              .lean(); 

      return {
        ...car.toObject(), 
        lowestExShowroomPrice: lowestPriceVariant.length > 0 ? lowestPriceVariant[0].exShowroomPrice : null
      };
    }));

    res.status(200).send(carsWithLowestPrice);
  } catch (error) {
    console.error('Error in fetching cars by brand:', error);
    res.status(500).send({ message: 'Error retrieving cars' });
  }
});
// Route to get the total number of vehicles for a specific brand
app.get('/cars/count/:brandId', async (req, res) => {
  try {
      const brandId = req.params.brandId;
      const count = await Car.countDocuments({ brand: brandId, active: true });

      res.json({
          brandId: brandId,
          totalVehicles: count
      });
  } catch (error) {
      console.error('Error in fetching vehicle count:', error);
      res.status(500).send({ message: 'Error retrieving vehicle count' });
  }
});




// Route to get the count of upcoming vehicles for a specific brand
app.get('/cars/upcoming/count/:brandId',  async (req, res) => {
  try {
      const brandId = req.params.brandId;
      const count = await Car.countDocuments({ 
          brand: brandId,
          upcoming: "true" ,
          active: true  // only consider active cars
      });

      res.json({
          brandId: brandId,
          totalUpcomingVehicles: count
      });
  } catch (error) {
      console.error('Error in fetching upcoming vehicle count:', error);
      res.status(500).send({ message: 'Error retrieving upcoming vehicle count' });
  }
});

// Route to get all upcoming vehicles for a specific brand
app.get('/cars/upcoming/:brandId', async (req, res) => {
  try {
      const brandId = req.params.brandId;
      const upcomingCars = await Car.find({
          brand: brandId,
          upcoming: "true",
          active: true  // only consider active cars
      }).populate('brand').select('heroimage brand carname fueltype active seater NCAP transmissiontype userRatingfromOwners');

      if (upcomingCars.length === 0) {
          return res.status(404).send({ message: 'No upcoming cars found for this brand' });
      }

      
      const upcomingCarsWithLowestPrice = await Promise.all(upcomingCars.map(async (car) => {
          const lowestPriceVariant = await Variant.find({ product_id: car._id , active: true})
                                                  .sort({ exShowroomPrice: 1 }) 
                                                  .limit(1) 
                                                  .lean(); 

          return {
              ...car.toObject(), 
              lowestExShowroomPrice: lowestPriceVariant.length > 0 ? lowestPriceVariant[0].exShowroomPrice : null
          };
      }));

      res.json(upcomingCarsWithLowestPrice);
  } catch (error) {
      console.error('Error in fetching upcoming cars:', error);
      res.status(500).send({ message: 'Error retrieving upcoming cars' });
  }
});

//Alternate Car
app.get('/alternate-cars', car_data.alternateCarController)
// app.get('/alternate-cars', car_data.alternateCarController)

//Delete Product
app.delete('/delete-product/:id', car_data.deleteProductController);
//Get All Product
app.get('/all-product-data',car_data.getAllProductData);

//Import 
const product_search_controller = require("../controllers/searchController");

//Search Route for APP and Web
app.get('/search-bar-route',product_search_controller.searchController);

module.exports = app;
