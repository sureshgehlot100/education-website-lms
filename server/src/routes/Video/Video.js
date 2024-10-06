const express = require('express');
const { addVideo, readVideo } = require('../../controller/controllers');
const videoMulterFile = require('../../middleware/Video/videoMulter');

const videoRoutes = express.Router();

videoRoutes.post('/add_video',videoMulterFile, addVideo);
videoRoutes.get('/read_video',readVideo);



module.exports = videoRoutes;
