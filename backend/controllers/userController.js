const EndUser = require('../models/endUserModel');
const CsvParser = require('json2csv').Parser;
const fetch = require('node-fetch');
const fs = require('fs');

const getPinAndCityData = async (postalCode) => {
  try {
    const response = await fetch(`https://api.postalpincode.in/pincode/${postalCode}`);
    const data = await response.json();

    if (data && data.length > 0 && data[0].PostOffice && data[0].PostOffice.length > 0) {
      const city = data[0].PostOffice[0].Block;
      return { pincode: postalCode, city };
    } else {
      console.error(`Invalid response or data structure from postal code API for postal code ${postalCode}`);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching pin code and city data for postal code ${postalCode}: ${error.message}`);
    return null;
  }
};

const register_user = async (req, res) => {
  try {
    // Fetch location data based on pin code
    const locationData = await getPinAndCityData(req.body.pin);
    if (!locationData) {
      return res.status(400).send({ success: false, msg: 'Invalid postal code' });
    }

    // Check if mobile number already exists
    const userData = await EndUser.findOne({ mobile: req.body.mobile });
    if (userData) {
      return res.status(409).send({ success: false, msg: 'Mobile number already registered' });
    }

    // Create new user with all fields from the request
    const newUser = new EndUser({
      image: req.file ? req.file.filename : null,
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      mobile: req.body.mobile,
      pin: req.body.pin,
      DOB: req.body.DOB,
      gender: req.body.gender,
      profession: req.body.profession,
      wheredidyouhearus: req.body.wheredidyouhearus,
      pincode: locationData.pincode,
      city: locationData.city
    });

    const newuser_data = await newUser.save();
    return res.status(201).send({ success: true, data: newuser_data });
  } catch (err) {
    console.error('Error in register_user:', err);
    return res.status(500).send({ success: false, msg: err.message });
  }
};
const filterUsersByDate = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    const start = new Date(startDate);
    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999); 

    if (!start || !end || isNaN(start.getTime()) || isNaN(end.getTime())) {
      return res.status(400).send({ success: false, msg: 'Invalid date format' });
    }

    const users = await EndUser.find({
      createdAt: { $gte: start, $lte: end }
    }).select('-_id fname lname email mobile pin DOB gender profession wheredidyouhearus createdAt'); 

    res.status(200).send({ success: true, data: users });
  } catch (err) {
    console.error('Error in filterUsersByDate:', err);
    res.status(500).send({ success: false, msg: err.message });
  }
};

const editUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await EndUser.findById(userId);

    if (!user) {
      return res.status(404).send({ success: false, msg: 'User not found' });
    }

    // Update fields if they are provided in the request
    user.fname = req.body.fname || user.fname;
    user.lname = req.body.lname || user.lname;
    user.email = req.body.email || user.email;
    user.mobile = req.body.mobile || user.mobile;
    user.DOB = req.body.DOB || user.DOB;
    user.gender = req.body.gender || user.gender;
    user.profession = req.body.profession || user.profession;
    user.wheredidyouhearus = req.body.wheredidyouhearus || user.wheredidyouhearus;

    // Handle image update and deletion of old image
    if (req.file) {
      if (user.image) {
        const imagePath = `./public/userImages/${user.image}`;
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }
      user.image = req.file.filename;
    }

    // Update pin, city, and pincode if pin is changed
    if (req.body.pin && req.body.pin !== user.pin) {
      const locationData = await getPinAndCityData(req.body.pin);
      if (locationData) {
        user.pin = req.body.pin;
        user.pincode = locationData.pincode;
        user.city = locationData.city;
      } else {
        return res.status(400).send({ success: false, msg: 'Invalid postal code' });
      }
    }

    const updatedUser = await user.save();
    res.status(200).send({ success: true, data: updatedUser });
  } catch (err) {
    console.error('Error in editUser:', err);
    res.status(500).send({ success: false, msg: err.message });
  }
};

const exportUser = async (req, res) => {
  try {
    let users = await EndUser.find({});
    
    // only users with a defined createdAt are processed
    users = users.filter(user => user.createdAt).map(user => ({
      fname: user.fname,
      lname: user.lname,
      email: user.email,
      mobile: user.mobile,
      pin: user.pin,
      DOB: user.DOB,
      gender: user.gender,
      profession: user.profession,
      wheredidyouhearus: user.wheredidyouhearus,
      createdAt: user.createdAt ? user.createdAt.toLocaleString() : 'N/A'
    }));

    const csvFields = ['fname', 'lname', 'email', 'mobile', 'pin', 'DOB', 'gender', 'profession', 'wheredidyouhearus', 'createdAt'];
    const csvParser = new CsvParser({ fields: csvFields });
    const csvData = csvParser.parse(users);

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=endusers.csv');
    res.status(200).end(csvData);
  } catch (error) {
    console.error('Error in exportUser:', error);
    res.status(500).send({ message: error.message });
  }
};


const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await EndUser.findById(userId);

    if (!user) {
      return res.status(404).send({ success: false, msg: 'User not found' });
    }

    res.status(200).send({ success: true, data: user });
  } catch (err) {
    res.status(400).send({ success: false, msg: err.message });
  }
};

module.exports = {
  register_user,
  editUser,
  exportUser,
  getUserById,
  getPinAndCityData,
  filterUsersByDate
};
