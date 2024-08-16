const express = require('express');
const { addVideo, readVideo } = require('../../controller/controllers');

const videoRoutes = express.Router();

videoRoutes.post('/add_video',addVideo);
videoRoutes.get('/read_video',readVideo);



module.exports = videoRoutes;
