const Slides = require("../../models/slides/slides");

const addSlides = async (req, res) => {
    try {
        const addSlidesData = req.body;
        if (req.file) {
            addSlidesData.thumbnail = req.file.filename;
        }
        const data = new Slides(addSlidesData);

        const response = await data.save();
        

        res.status(200).json({ message: 'course added successfully ',data:response  });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal server error" });


    }

}
module.exports = addSlides;