const Slides = require("../../models/slides/slides");

const trueSlides = async(req,res)=>{

    try {
        const slides = await Slides.find({ status: true });
        const filePath = `${req.protocol}://${req.get('host')}/uploads/`;
        res.status(200).json({ message: 'data fetched successfully', data: slides, filePath });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'intrrnal server error' });

    }
};
module.exports = trueSlides;