const multer = require('multer');
const path = require('path');
const uuidv4 = require('uuid/v4');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', '..', 'upload', 'product'));
    },
    filename: (req, file, cb) => {
        const extension = file.originalname.split('.').slice(-1).toString();

        const imageName = `${uuidv4()}.${extension}`;
        
        cb(null, imageName);
    }
});

module.exports = multer({ storage: storage });
