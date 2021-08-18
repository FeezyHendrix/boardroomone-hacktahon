const fs = require('fs').promises;
const logger = require('./logger');


const removeFile = (filePath) => {
  console.log(filePath);
  try {
    fs.unlink(filePath);
  } catch(e) {
    logger.error(e);
  }
};

module.exports = removeFile;