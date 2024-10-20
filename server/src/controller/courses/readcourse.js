const Course = require("../../models/course/course");

const readCourse = async (req, res) => {
    try {
        const response = await Course.find();
        const filePath = `${req.protocol}://${req.get('host')}/uploads/`;
        res.status(200).json({ message: 'data fethched successfull', data: response, filePath })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' });
    }
}
module.exports = readCourse;