const express = require('express');
const multer = require('multer');
const path = require('path')
const upload = multer({ dest: path.join(__dirname, '/../uploads')});

const router = express.Router();
const { ImageUploaderController } = require('../controllers');

router.route('/upload', upload.single('avatar'), ImageUploaderController.uploadImage);


module.exports = router;
