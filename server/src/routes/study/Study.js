const express = require('express');
const { addstudy, readstudy } = require('../../controller/controllers');
const studyMulterFile = require('../../middleware/Study/studyMulter');


const studyRoutes = express.Router();

studyRoutes.post('/add_study',studyMulterFile, addstudy);
studyRoutes.get('/read_study',readstudy);
// studyRoutes.put('/update_study/:_id',studyMulterFile,updatestudy)



module.exports = studyRoutes;
