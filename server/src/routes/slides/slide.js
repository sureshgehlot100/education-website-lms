const express = require('express');
const { addSlides, readSlides, deleteSingleSlides, readSingleslides, updateSlides, changeSlidesStatus, trueSlides } = require('../../controller/controllers');
const slidesMulterFiles = require('../../middleware/Slides/slidesMulter');


const slidesRoutes = express.Router();

slidesRoutes.post('/add_slides', slidesMulterFiles, addSlides);
slidesRoutes.get('/read_slide',readSlides);
slidesRoutes.delete('/delete_single_slides/:_id',deleteSingleSlides);
slidesRoutes.get('/fetch_slides_with_id/:_id',readSingleslides);
slidesRoutes.put('/update_slides/:_id',slidesMulterFiles,updateSlides);
slidesRoutes.put('/change_slides_status',changeSlidesStatus);
slidesRoutes.get('/true_slides',trueSlides);

module.exports = slidesRoutes;
