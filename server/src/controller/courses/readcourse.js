const Course = require("../../models/course/course");
// const JWT = require('jsonwebtoken');
// require('dotenv').config();
// JWT_KEY

const readCourse = async (req, res) => {
    try {
        // const auth = req.headers.authorization;
        // const token = auth.split(' ')[1];

        // if (!token) return res.status(400).json({ message: 'please log In' })

        // console.log(token);

        const response = await Course.find();
        const filePath = `${req.protocol}://${req.get('host')}/uploads/`;

        // JWT.verify(token, process.env.JWT_KEY, (error, decode) => {
        //     if (error) return res.status(400).json({ message: 'Invalid Token' })
        //     res.status(200).json({ message: 'data fethched successfull', data: response, filePath })
        // });
        res.status(200).json({ message: 'data fethched successfull', data: response, filePath })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' });

    }
}
module.exports = readCourse;