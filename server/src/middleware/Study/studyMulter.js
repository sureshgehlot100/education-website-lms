const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/uploads");
  },
  filename: (req, file, cb) => {
    const namArr = file.originalname.split(".");
    cb(null, Date.now() + "." + namArr[namArr.length - 1]);
  },
});

const studyMulterFile = multer({ storage: storage }).single("file");

module.exports = studyMulterFile;
