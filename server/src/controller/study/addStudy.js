const Study = require("../../models/study/study");
const path = require("path");

const addstudy = async (req, res) => {
  try {
    const addStudy = req.body;
    console.log(req.body)
    console.log(req.file)
    if (req.file) {
     addStudy.filename = req.file.filename;
     addStudy.filePath = req.file.path;
     addStudy.file = req.file.filename;
  }
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    if (req.file.mimetype !== "application/pdf") {
      return res.status(400).json({ message: "Only PDF files are allowed" });
    }
    const newStudy = new Study(addStudy);
    const response = await newStudy.save();
    res
      .status(200)
      .json({ message: "File Uploaded Successfully", data: response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
module.exports = addstudy;
