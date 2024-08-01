const axios = require('axios');
const otpModel = require('../models/otpModel');
require('dotenv').config(); // Ensure environment variables are loaded

exports.sendOtp = async (req, res) => {
    const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP

    try {
        await otpModel.saveOtp(req.body.phone, otp.toString());

        // Debug logs
        // console.log('API Key:', process.env.MTALKZ_API_KEY);
        // console.log('Sender ID:', process.env.MTALKZ_SENDER_ID);

        const apiKey = String(process.env.MTALKZ_API_KEY).trim();
        const senderId = String(process.env.MTALKZ_SENDER_ID).trim();

        const response = await axios({
            method: 'post',
            url: 'https://msgn.mtalkz.com/api',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                apikey: apiKey,
                senderid: senderId,
                number: req.body.phone,
                message: `Welcome to MotorOctane App. Here is your OTP: ${otp}\n\nPlease do not share this with anyone else.`,
                format: 'json'
            }
        });

        if (response.data.status === 'OK') {
            res.send({ success: true, message: 'OTP sent successfully.' });
        } else {
            res.send({ success: false, message: 'Failed to send OTP.', error: response.data });
        }
    } catch (error) {
        console.error('Error sending OTP:', error); // Log the error for debugging
        res.send({ success: false, message: 'Error sending OTP.', error: error.message });
    }
};

exports.verifyOtp = async (req, res) => {
    try {
        const isValid = await otpModel.verifyOtp(req.body.phone, req.body.otp); // Assuming verifyOtp is async
        if (isValid) {
            res.send({ success: true, message: 'OTP verified successfully.', phone: req.body.phone });
        } else {
            res.send({ success: false, message: 'Invalid OTP or OTP expired.' });
        }
    } catch (error) {
        console.error('Error verifying OTP:', error); // Log the error for debugging
        res.send({ success: false, message: 'Error verifying OTP.', error: error.message });
    }
};
