const axios = require('axios');
require('dotenv').config();

const searchController = async (req, res) => {
  try {
    const search = req.body.search.trim(); // Trim any extra spaces
    const searchRegex = new RegExp(search, 'i'); // Create a case-insensitive regex for the search term

    // Fetch data from the /api/allproducts/mo endpoint
    const response = await axios.get(`${process.env.SEARCH_URI}/api/allproducts/mo`); // Replace with your actual API URL
    const allProducts = response.data;

    // Log the fetched data to inspect it
   

    // Ensure allProducts is an array
    if (!Array.isArray(allProducts)) {
      return res.status(400).send({ message: "Invalid data format received from API" });
    }

    // Filter cars based on the search term for carname and brand name
    const filteredCars = allProducts.filter(car => {
      const matchCarname = searchRegex.test(car.carname);
      const matchBrandName = car.brand && searchRegex.test(car.brand.name);
      
      return matchCarname || matchBrandName;
    });

    // Log the filtered cars
    

    res.json({
      success: true,
      cars: filteredCars
    });
  } catch (error) {
    console.error("Error in searching:", error);
    res.status(400).send({ message: "Error in searching", error });
  }
};

module.exports = { searchController };
