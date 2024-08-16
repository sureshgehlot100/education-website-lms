const express = require('express');
const { adminLogin} = require('../../controller/controllers');

const adminRoutes = express.Router();

adminRoutes.post('/login',adminLogin);




module.exports = adminRoutes;