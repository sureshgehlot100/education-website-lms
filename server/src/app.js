
const express = require('express');
const adminRoutes = require('./routes/admin/adminRoutes');
const courseRoutes = require('./routes/course/Courses');
const slidesRoutes = require('./routes/slides/slide');
const TeamsRoutes = require('./routes/Team/Team');
const videoRoutes = require('./routes/Video/Video');
const otpRouter = require('./routes/otp/otp');
const userRoutes = require('./routes/user/user');
const verifyJWT = require('./middleware/jwt/jwtVerify');
const paymentRoutes = require('./routes/payment/payment');

require('./db/config');

const allRoutes = express.Router();
const verifyRoutes = express.Router();
// verifyRoutes.use(verifyJWT);

allRoutes.use('/admin', adminRoutes);
// verifyRoutes.use('/course', courseRoutes);
allRoutes.use('/course', courseRoutes);
allRoutes.use('/slides', slidesRoutes);
allRoutes.use('/teams', TeamsRoutes);
allRoutes.use('/videos', videoRoutes);
allRoutes.use('/otp', otpRouter);
allRoutes.use('/user', userRoutes);
allRoutes.use('/payment',paymentRoutes);

// allRoutes.use('/',verifyRoutes);

module.exports = allRoutes;