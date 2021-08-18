const catchAsync = require("../utils/catchAsync");
const logger = require("../utils/logger");
const path = require('path');
const { cloudinaryHelper } = require('../helpers');
const uploadImage = catchAsync(async (req, res) => {
  const imageUploadResponse  = await cloudinaryHelper.uploadImageTocloudinary(path.join(__dirname, `/../uploads/${req.file.filename}`));

  const urlArray = imageUploadResponse.secure_url.split('upload');
  urlArray[0] = urlArray[0] + `upload/c_thumb,g_face,h_${process.env.HEIGHT},w_${process.env.WIDTH}`
  let processedUrl = urlArray[0] + urlArray[1];

  console.log(imageUploadResponse);
  res.send(processedUrl);
});

module.exports = {
  uploadImage,
}