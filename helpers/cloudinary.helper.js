const cloudinary = require('cloudinary').v2;
const logger = require('../utils/logger');

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

const uploadImageTocloudinary = async (base64) => {
  try {
    const response = await cloudinary.uploader.upload(
      'data:image/jpeg;base64,' + base64, {
     eager: [
      { width: process.env.WIDTH, height: process.env.WIDTH, crop: "crop", gravity: "face"} 
     ]
    });

    return response;
  } catch(e) {
    console.log(e.response)
    logger.error(JSON.stringify(e));
    throw new Error(e);
  }
};


module.exports = {
  uploadImageTocloudinary,
};