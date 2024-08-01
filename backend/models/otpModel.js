// models/otpModel.js
const otpStore = new Map();

exports.saveOtp = (phone, otp) => {
    otpStore.set(phone, otp);
};

exports.verifyOtp = (phone, otp) => {
    const validOtp = otpStore.get(phone);
    otpStore.delete(phone); // OTP is for one-time use 
    return otp === validOtp;
};
