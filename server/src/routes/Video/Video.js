const express = require('express');
const { addVideo, readVideo, updateVideo } = require('../../controller/controllers');
const videoMulterFile = require('../../middleware/Video/videoMulter');

const videoRoutes = express.Router();

videoRoutes.post('/add_video',videoMulterFile, addVideo);
videoRoutes.get('/read_video',readVideo);
videoRoutes.put('/update_video/:_id',videoMulterFile,updateVideo)



module.exports = videoRoutes;
