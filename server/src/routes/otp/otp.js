const express = require('express');
const { generate_otp } = require('../../controller/controllers');

const otpRouter = express.Router();

otpRouter.post('/generate_otp', generate_otp);


module.exports = otpRouter;