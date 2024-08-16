const Course = require("../../models/course/course");

const addCourses = async (req, res) => {
    try {
        const courseData = req.body;
        if (req.file) {
            courseData.thumbnail = req.file.filename;
        }

        const data = new Course(courseData);      
        const response =await data.save();
        // // error ye hai ki submit pe data empty aa rha hai agar awit nhi lagate to data wait nha krke save ho jata hai//
        // // console.log(data.save());
        console.log(response); 
        res.status(200).json({ message: 'course added successfully ', data: response });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal server error" });

    }
}
module.exports = addCourses;