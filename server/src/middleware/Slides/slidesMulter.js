const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/uploads');
    },
    filename: (req, file, cb) => {
        const NammArr = file.originalname.split('.');
        cb(null, Date.now() + '.' + NammArr[NammArr.length - 1])
    }
})

const slidesMulterFiles = multer({ storage: storage }).single('thumbnail');

module.exports = slidesMulterFiles;