const Car = require('../models/productModel');
const Variant = require('../models/varientModel');
const fs = require('fs');
const path = require('path');

const createCarController = {
  createCar: async (req, res) => {
    try {

      
      const newCar = new Car({
        brand: req.body.brand,
        carname: req.body.carname,
        // sellingsince: req.body.sellingsince,//update k bad isko hata dena
        salesranking:req.body.sellingsince,
        launchedinput:req.body.launchedinput,
        movrating: req.body.movrating,
        bodytype: req.body.bodytype,
        subbodytype: req.body.subbodytype,
        active: req.body.active,
        heroimage: req.files['heroimage'] ? req.files['heroimage'][0].filename : undefined,
        heroimagename: req.body.heroimagename,
        grayimage: req.files['grayimage'] ? req.files['grayimage'][0].filename : undefined,
        grayname: req.body.grayname,
        redimage: req.files['redimage'] ? req.files['redimage'][0].filename : undefined,
        redname: req.body.redname,
        blueimage: req.files['blueimage'] ? req.files['blueimage'][0].filename : undefined,
        blueimagename: req.body.blueimagename,
        blackimage: req.files['blackimage'] ? req.files['blackimage'][0].filename : undefined,
        blackimagename: req.body.blackimagename,
        greenimage: req.files['greenimage'] ? req.files['greenimage'][0].filename : undefined,
        greenimagename: req.body.greenimagename,
        creamimage: req.files['creamimage'] ? req.files['creamimage'][0].filename : undefined,
        creamimagename: req.body.creamimagename,
        brownimage: req.files['brownimage'] ? req.files['brownimage'][0].filename : undefined,
        brownimagename: req.body.brownimagename,
        yellowimage: req.files['yellowimage'] ? req.files['yellowimage'][0].filename : undefined,
        yellowimagename: req.body.yellowimagename,
        purpleimage: req.files['purpleimage'] ? req.files['purpleimage'][0].filename : undefined,
        purpleimagename: req.body.purpleimagename,
        whiteimage: req.files['whiteimage'] ? req.files['whiteimage'][0].filename : undefined,
        whitename: req.body.whitename,
        seater: req.body.seater,
        fueltype: req.body.fueltype,
        transmissiontype: req.body.transmissiontype,
        NCAP: req.body.NCAP,
        upcoming: req.body.upcoming,
        itext: req.body.itext,
        carbrowsher: req.files['carbrowsher'] ? req.files['carbrowsher'][0].filename : undefined,
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

      let car_data = await newCar.save();
      return res.status(201).send(car_data);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
};

// Edit Car Controller

const editCarController = async (req, res) => {
  const { carId } = req.params; // Assuming the car's ID is passed as a URL parameter
  
  try {
      const car = await Car.findById(carId);

      if (!car) {
          return res.status(404).send({ message: 'Car not found' });
      }

      // Update car fields from req.body
      Object.keys(req.body).forEach(key => {
          car[key] = req.body[key];
      });

      // Define the fields for which you expect image uploads
      const imageFields = [
          'heroimage', 'grayimage', 'redimage', 'blueimage', 'blackimage', 'greenimage',
          'creamimage', 'brownimage', 'yellowimage', 'purpleimage', 'whiteimage', 'carbrowsher',
          'keyF1', 'keyF2', 'keyF3', 'keyF4', 'keyF5', 'keyF6', 'keyF7', 'keyF8', 'keyF9',
          'keyF10', 'keyF11', 'keyF12', 'keyF13', 'keyF14', 'keyF15', 'keyF16', 'keyF17', 'keyF18',
          'keyF19', 'keyF20', 'spaceC1', 'spaceC2', 'spaceC3', 'spaceC4', 'spaceC5', 'spaceC6',
          'spaceC7', 'spaceC8', 'spaceC9', 'spaceC10', 'spaceC11', 'spaceC12', 'spaceC13', 'spaceC14',
          'spaceC15', 'spaceC16', 'spaceC17', 'spaceC18', 'spaceC19', 'spaceC20', 'storageC1',
          'storageC2', 'storageC3', 'storageC4', 'storageC5', 'storageC6', 'storageC7', 'storageC8',
          'storageC9', 'storageC10', 'storageC11', 'storageC12', 'storageC13', 'storageC14',
          'storageC15', 'storageC16', 'storageC17', 'storageC18', 'storageC19', 'storageC20'
      ];

      imageFields.forEach(field => {
          if (req.files && req.files[field]) {
              car[field] = req.files[field][0].filename;
          }
      });

      const updatedCar = await car.save();
      res.status(200).json(updatedCar);
  } catch (error) {
      res.status(400).send({ message: "Error updating car", error });
  }
};


// Search Product Controller

searchProductController = async (req, res) => {
  try {
    const search = req.body.search;
    const search_result = await Car.find({
      "carname": {
        $regex: ".*" + search + ".*",
        $options: "i"
      },
      active: true // Ensure only active cars are included
    })
    .populate('brand')
    .select('heroimage brand carname fueltype seater NCAP active transmissiontype userRatingfromOwners')
    .lean();

    if (search_result.length === 0) {
      
      return res.status(200).send({ success: true, message: "No car Found" });
    }

    // Nothing to understand here, Chilgojanand 
    const carsWithLowestPrice = await Promise.all(search_result.map(async (car) => {
      const lowestPriceVariant = await Variant.find({ product_id: car._id , active: true})
                                              .sort({ exShowroomPrice: 1 }) 
                                              .limit(1)
                                              .lean(); 

      return {
        ...car, 
        lowestExShowroomPrice: lowestPriceVariant.length > 0 ? lowestPriceVariant[0].exShowroomPrice : null
      };
    }));

    res.json(carsWithLowestPrice);
  } catch (error) {
    res.status(400).send({ message: "Error in searching car", error });
  }
};

//Get all product for popularity module

const getAllCarsForPopularityModule = async(req,res) =>{
  try {
    const car_data = await Car.find().populate('brand').select('carname popularity')
    res.status(200).send({
      success : true,
      message: "List of cars",
      data: car_data
  });
  } catch (error) {
    res.status(400).send({ message: "Error in searching car", error });
  }
}

//Update Popularity of car

const updateCarPopularity = async (req, res) => {
  const { carId } = req.params;
  const { popularity } = req.body;

  try {
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).send({ message: 'Car not found' });
    }

    if (popularity !== null && (popularity < 1 || popularity > 10)) {
      return res.status(400).json({ success: false, message: 'Popularity must be between 1 and 10.' });
    }

    // Look for another car with the same popularity number that is not the current car
    if (popularity !== null) {
      const existingCarWithPopularity = await Car.findOne({
        _id: { $ne: carId },
        popularity: popularity
      });

      if (existingCarWithPopularity) {
        return res.status(400).json({ success: false, message: 'Popularity number is already assigned to another car.' });
      }
    }

    car.popularity = popularity;
    const updatedCar = await car.save();
    res.status(200).json({ success: true, message: 'Popularity updated successfully', data: updatedCar });
  } catch (error) {
    res.status(500).send({ message: "Failed to update car popularity due to an internal error", error });
  }
};


//Get Popular cars for frontend
//Get Popular cars for frontend
const getPopularCarsController = async (req, res) => {
  try {
    let popularCars = await Car.find({
                               popularity: { $ne: null }, 
                               active: true
                             })
                               .populate('brand')
                               .select('carname popularity heroimage brand fueltype seater NCAP transmissiontype userRatingfromOwners')
                               .sort({ popularity: 1 }) 
                               .lean();

    // Correctly fetch the lowest price variant for each car
    for (let car of popularCars) {
        const lowestPriceVariant = await Variant.find({ car: Car._id , active:true }) // Corrected to use car._id
                                                .sort({ exShowroomPrice: 1 })
                                                .limit(1)
                                                .lean();

        // Assigning the lowestExShowroomPrice or null if no variants are found
        car.lowestExShowroomPrice = lowestPriceVariant.length > 0 ? lowestPriceVariant[0].exShowroomPrice : null;
    }

    if (!popularCars.length) {
        return res.status(404).json({ success: false, message: "No popular cars found" });
    }

    res.json({ success: true, data: popularCars });
  } catch (error) {
    console.error("Error in getPopularCarsController:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

//Popular car for frontend referbished
const getPopularCarsWithLowestVariantPriceController = async (req, res) => {
  try {
    // Fetch active cars with popularity between 1 and 10
    let popularCars = await Car.find({
                              // Ensure cars have a popularity between 1 and 10
                               active: true
                             })
                               .populate('brand')
                               .select('carname popularity heroimage brand fueltype seater NCAP transmissiontype userRatingfromOwners')
                               .sort({ popularity: 1 })
                               .lean();

    // Enrich each car with the lowest exShowroomPrice from its variants
    const carsWithLowestPrice = await Promise.all(popularCars.map(async (car) => {
      // Ensure the correct field is used to match the Car document in Variant collection
      // The field should match your Variant model's reference to Car. It's `product_id` here, adjust if your reference field is different.
      const lowestPriceVariant = await Variant.findOne({ product_id: car._id , active:true})
                                              .sort({ exShowroomPrice: 1 }) // Sort by exShowroomPrice in ascending order
                                              .lean(); // Convert mongoose document to plain JavaScript object

      // Adding lowestExShowroomPrice directly to car object, no need to call toObject() since .lean() was used
      car.lowestExShowroomPrice = lowestPriceVariant ? lowestPriceVariant.exShowroomPrice : null;

      return car;
    }));

    res.json({ success: true, data: carsWithLowestPrice });
  } catch (error) {
    console.error("Error in getPopularCarsWithLowestVariantPriceController:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};



//Get all Product Data
const getAllProductData = async (req, res) => {
  try {
    let products = await Car.find({ active: true }) .populate('brand')
    .select('carname popularity heroimage brand fueltype seater NCAP transmissiontype userRatingfromOwners').lean(); // Get all cars

    // Map over each product and fetch the lowest exShowroomPrice variant
    const productsWithLowestPrice = await Promise.all(products.map(async (product) => {
      const lowestPriceVariant = await Variant.find({ car: product._id }) // Assuming 'car' is the field in Variant model that refers to Car
      .sort({ exShowroomPrice: 1 }) // Sort by price, ascending
      .limit(1) // Limit to the lowest price
      .lean();
      
      // Add lowestExShowroomPrice to product object
      product.lowestExShowroomPrice = lowestPriceVariant[0] ? lowestPriceVariant[0].exShowroomPrice : "Not available";
      return product;
    }));

    res.status(200).json({
      success: true,
      message: "All product data retrieved successfully, including lowest ex-showroom prices",
      data: productsWithLowestPrice
    });
  } catch (error) {
    res.status(400).send({ message: "Error fetching all product data", error });
  }
};

//Alternate Cars Controller

const alternateCarController = async(req, res) => {
  const { carId } = req.body; // Assume carId is passed in the request body

  if (!carId) {
    return res.status(400).send({ message: 'Car ID must be provided.' });
  }

  try {
    const originalCar = await Car.findById(carId).lean();
    if (!originalCar) {
      return res.status(404).send({ message: 'Original car not found.' });
    }

    const alternateCars = await Car.find({
      _id: { $ne: originalCar._id },
      bodytype: originalCar.bodytype,
      subbodytype: originalCar.subbodytype,
      active: true
    })
    .populate('brand')
    .select('carname popularity heroimage brand fueltype seater NCAP transmissiontype userRatingfromOwners')
    .lean();

    if (alternateCars.length === 0) {
      return res.status(404).send({ message: 'No alternate cars found matching the specified criteria.' });
    }

    const carsWithLowestPrice = await Promise.all(alternateCars.map(async (car) => {
      // Ensure the correct field is used to match the Car document in Variant collection
      // The field should match your Variant model's reference to Car. It's `product_id` here, adjust if your reference field is different.
      const lowestPriceVariant = await Variant.findOne({ product_id: car._id , active: true })
                                              .sort({ exShowroomPrice: 1 }) // Sort by exShowroomPrice in ascending order
                                              .lean(); // Convert mongoose document to plain JavaScript object

      // Adding lowestExShowroomPrice directly to car object, no need to call toObject() since .lean() was used
      car.lowestExShowroomPrice = lowestPriceVariant ? lowestPriceVariant.exShowroomPrice : null;

      return car;
    }));

    res.json({ success: true, data: carsWithLowestPrice });
  } catch (error) {
    console.error("Error finding alternate cars:", error);
    res.status(500).send({ message: "Error finding alternate cars", error });
  }
};



//Delete Product
// Assuming 'uploadDir' is defined in a scope accessible by this controller
const uploadDir = path.join(__dirname, '..', 'public', 'productImages');

const deleteProductController = async (req, res) => {
  const { id } = req.params; // Use 'id' to match '/delete-product/:id'

  try {
    // Find the product by ID
    const product = await Car.findById(id);
    if (!product) {
      return res.status(404).send({ message: 'Product not found.' });
    }

    // List of image fields in the product model
    const imageFields = [
      'heroimage', 'grayimage', 'redimage', 'blueimage', 'blackimage', 'greenimage',
      'creamimage', 'brownimage', 'yellowimage', 'purpleimage', 'whiteimage',
      'carbrowsher', 'keyF1', 'keyF2', 'keyF3', 'keyF4', 'keyF5', 'keyF6', 'keyF7',
      'keyF8', 'keyF9', 'keyF10', 'keyF11', 'keyF12', 'keyF13', 'keyF14', 'keyF15',
      'keyF16', 'keyF17', 'keyF18', 'keyF19', 'keyF20', 'spaceC1', 'spaceC2',
      'spaceC3', 'spaceC4', 'spaceC5', 'spaceC6', 'spaceC7', 'spaceC8', 'spaceC9',
      'spaceC10', 'spaceC11', 'spaceC12', 'spaceC13', 'spaceC14', 'spaceC15',
      'spaceC16', 'spaceC17', 'spaceC18', 'spaceC19', 'spaceC20', 'storageC1',
      'storageC2', 'storageC3', 'storageC4', 'storageC5', 'storageC6', 'storageC7',
      'storageC8', 'storageC9', 'storageC10', 'storageC11', 'storageC12',
      'storageC13', 'storageC14', 'storageC15', 'storageC16', 'storageC17',
      'storageC18', 'storageC19', 'storageC20',
      // Include additional fields if necessary
    ];

    // Delete each image associated with the product
    imageFields.forEach(field => {
      if (product[field]) {
        const filePath = path.join(uploadDir, product[field]);
        fs.unlink(filePath, err => {
          if (err) console.error(`Failed to delete image file: ${filePath}`, err);
          else console.log(`Successfully deleted image file: ${filePath}`);
        });
      }
    });

    // Delete the product document from the database
    await Car.findByIdAndRemove(id);
    res.status(200).send({ message: 'Product and associated images have been successfully deleted.' });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).send({ message: "Error deleting product", error });
  }
};
//End of Controllers
module.exports = 
{createCarController,
  editCarController,
  searchProductController,
  getAllCarsForPopularityModule,
  updateCarPopularity,
  getPopularCarsController,
  getAllProductData,
  alternateCarController,
  deleteProductController,
  getPopularCarsWithLowestVariantPriceController
};
