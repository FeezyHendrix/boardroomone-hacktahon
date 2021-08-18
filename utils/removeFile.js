const fs = require('fs').promises;
const logger = require('./logger');

/**
 * @method removeFile Accepts file path and delete's the file.
 * @param {*} filePath 
 */
const removeFile = (filePath) => {
  try {
    fs.unlink(filePath);
  } catch(e) {
    logger.error(e);
  }
};

module.exports = removeFile;