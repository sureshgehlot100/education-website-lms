const Slides = require("../../models/slides/slides");


const deleteSingleSlides = async (req, res) => {
    try {
        const response = await Slides.findByIdAndDelete(req.params);
       
        if (!response) return res.status(404).json({ message: 'please provoide a valid course id' });

        res.status(200).json({ message: 'slides deleted successfuly', data: response });
    } catch (error) {

        res.status(500).json({ message: 'internal server error' });
        console.log(error)

    }
};
module.exports = deleteSingleSlides;