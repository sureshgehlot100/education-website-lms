const Slides = require("../../models/slides/slides");

const readSlides = async (req, res) => {
    try {

        const response = await Slides.find();
        const filePath = `${req.protocol}://${req.get('host')}/uploads/`;
        res.status(200).json({ message: 'data fetched successfully', data: response, filePath });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'internal Server error' });
    }
};
module.exports = readSlides;