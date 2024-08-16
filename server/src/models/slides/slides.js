const mongoose = require('mongoose');

const addSlidesSchema = new mongoose.Schema({
    slidesheading: String,
    slidessubheading: String,
    slidesdes: String,
    thumbnail: String,
    status: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date
    }
});

const Slides = mongoose.model('slides', addSlidesSchema);

module.exports = Slides;