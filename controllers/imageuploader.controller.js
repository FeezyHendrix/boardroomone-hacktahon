const catchAsync = require("../utils/catchAsync");
const logger = require("../utils/logger");
const path = require("path");
const fs = require("fs");

const { cloudinaryHelper } = require("../helpers");
const removeFile = require("../utils/removeFile");
const { removeBackground } = require("../helpers/removebg.helper");


/**
 * @method uploadImage
 * Controller to response to a new image upload response
 * @returns {Object}
 */
const uploadImage = catchAsync(async (req, res) => {
  // Get file path of uploaded image
  const filePath = path.join(__dirname, `/../uploads/${req.file.filename}`);

  // Call external remove background api
  // Removes current background and set's it to black
  const removeBgResponse = await removeBackground(
    process.env.REMOVE_BG_BASE_URL,
    {
      image_file_b64: fs.readFileSync(filePath).toString("base64"),
      format: "auto",
      bg_color: process.env.BG_COLOR,
    },
    process.env.REMOVE_BG_API_KEY
  );
  
  // Upload image to cloudinary
  const imageUploadResponse = await cloudinaryHelper.uploadImageTocloudinary(
    removeBgResponse.data.result_b64
  );
  
  // Return newly created image
  res.send({ avatar_url: imageUploadResponse.secure_url });

  // Remove file after upload
  removeFile(filePath);
});

module.exports = {
  uploadImage,
};
