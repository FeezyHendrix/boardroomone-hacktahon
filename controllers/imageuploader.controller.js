const catchAsync = require("../utils/catchAsync");
const logger = require("../utils/logger");
const path = require("path");
const fs = require("fs");

const { cloudinaryHelper } = require("../helpers");
const removeFile = require("../utils/removeFile");
const { removeBackground } = require("../helpers/removebg.helper");


const uploadImage = catchAsync(async (req, res) => {
  const filePath = path.join(__dirname, `/../uploads/${req.file.filename}`);

  const removeBgResponse = await removeBackground(
    process.env.REMOVE_BG_BASE_URL,
    {
      image_file_b64: fs.readFileSync(filePath).toString("base64"),
      format: "auto",
      bg_color: process.env.BG_COLOR,
    },
    process.env.REMOVE_BG_API_KEY
  );

  const imageUploadResponse = await cloudinaryHelper.uploadImageTocloudinary(
    removeBgResponse.data.result_b64
  );

  res.send(imageUploadResponse.secure_url);

  // Remove file after upload
  removeFile(filePath);
});

module.exports = {
  uploadImage,
};
