const express = require('express');
const multer = require('multer');
const path = require('path')

/**
 * Accepts multipart upload from client.
 */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '/../uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})

const upload = multer({ storage: storage });

const router = express.Router();
const { ImageUploaderController } = require('../controllers');

router.route('/').get((req, res) => {
  return res.render('index');
})
router.route('/upload').post(upload.single('avatar'), ImageUploaderController.uploadImage);


module.exports = router;
