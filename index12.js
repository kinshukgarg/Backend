const express = require('express');
const app = express();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.array('file',5), (req, res) => {
    res.send('Upload completed');
});

app.listen(5800, () => {
    console.log('Server started at port 5800');
});
