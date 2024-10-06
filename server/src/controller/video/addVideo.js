const Video = require("../../models/video/video");
const path = require("path");

const addVideo = async (req, res) => {
  try {
    const courseData = req.body;
    console.log(courseData);
    if (!req.file) {
      return res.status(400).json({ message: "Video file is required" });
    }
    if (req.file) {
      const filename = path.basename(req.file.path);
      courseData.videoFile = filename;
    }
    const data = new Video(courseData);
    const response = await data.save();
    res.status(200).json({ message: "data inserted successfully", data: response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
module.exports = addVideo;
