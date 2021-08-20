const cloudinary = require("cloudinary").v2;
const logger = require("../utils/logger");

/**
 * Setup cloudinary config from .env file
 */
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

/**
 * @method uploadImageTocloudinary
 * @param {*} base64 : Accepts basse64 image encoding and upload to cloudinary
 * Uses cloudindary transformation api to crop and detect persona face
 * @returns {Object<response>}
 */

const uploadImageTocloudinary = async (base64) => {
  try {
    const response = await cloudinary.uploader.upload(
      "data:image/jpeg;base64," + base64,
      {
        width: process.env.WIDTH,
        height: process.env.HEIGHT,
        crop: "thumb",
        gravity: "face",
      }
    );

    return response;
  } catch (e) {
    logger.error(JSON.stringify(e));
    throw new Error(e);
  }
};

module.exports = {
  uploadImageTocloudinary,
};
