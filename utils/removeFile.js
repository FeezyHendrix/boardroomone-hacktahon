const fs = require('fs');
const logger = require('./logger');


const removeFile = (filePath) => {
  try {
    fs.unlink(filePath);
  } catch(e) {
    logger.error(e);
  }
};

module.exports = removeFile;