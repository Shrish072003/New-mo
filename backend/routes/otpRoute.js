// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/otpController');

//SEND OTP
router.post('/send-otp', authController.sendOtp);
//VERIFY OTP
router.post('/verify-otp', authController.verifyOtp);

module.exports = router;
