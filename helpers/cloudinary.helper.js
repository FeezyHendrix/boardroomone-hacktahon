const cloudinary = require('cloudinary').v2;
const logger = require('../utils/logger');

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

const uploadImageTocloudinary = async (filePath) => {
  try {
    const response = await cloudinary.uploader.upload(filePath, {
      background_removal: "cloudinary_ai",
    });

    return response;
  } catch(e) {
    logger.error(e);
    throw new Error(e);
  }
};


module.exports = {
  uploadImageTocloudinary,
};