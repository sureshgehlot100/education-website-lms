const mongoose = require('mongoose');

const studySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
      },
      lessonNumber: {
        type: Number,
        required: true
      },
      file: {
        type: String,
        required: true
      },
      filename: {
        type: String,
        required: true,
      },
      filePath: {
        type: String,
        required: true,
      },
      created_at: {
        type: Date,
        default: Date.now
      },
      updated_at: {
        type: Date
      }
    });
const Study = mongoose.model('study',studySchema);

module.exports = Study;


