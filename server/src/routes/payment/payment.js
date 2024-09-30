const express = require('express');
const { reqPayment, receipt } = require('../../controller/controllers');

const paymentRoutes = express.Router();

paymentRoutes.post('/req-payment', reqPayment);
paymentRoutes.post('/receipt',receipt)

module.exports = paymentRoutes;