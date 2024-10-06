const Video = require("../../models/video/video");

const readVideo = async (req, res) => {
    try {
        const response = await Video.find().populate('coursecat');
        const filePath = `${req.protocol}://${req.get('host')}/uploads/`;
        res.status(200).json({ message: 'data fetched successfully', data: response,filePath });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' });

    }
};
module.exports = readVideo;