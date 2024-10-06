const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    coursecat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'courses'
    },
    videotopic:String,
    videoFile: {
        type: String,
        required: true,
      },
    created_at:{
        type:Date,
        default:Date.now
    },
    updated_at:{
        type:Date,  
    }
});
const Video = mongoose.model('videos',videoSchema);

module.exports = Video;


