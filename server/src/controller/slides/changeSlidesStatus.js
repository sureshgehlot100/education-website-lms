
const Slides = require("../../models/slides/slides");

const changeSlidesStatus = async (req, res) => {
    try {
        const response = await Slides.updateOne(
            {
                _id: req.body.id

            },
            {
                $set: {
                    stauts: req.body.Status,
                    updated_at: Date.now()
                }
            }
        );

        res.status(200).json({ message: 'status updated successfully ', data: response });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "internal server error" });
    }
};
module.exports = changeSlidesStatus;