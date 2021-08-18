const axios = require('axios').default;
const logger = require('../utils/logger');

/**
 * @method removeBackground
 * Remove background from an image and set's it to black
 * @param {*} url 
 * @param {*} data 
 * @param {*} apikey 
 * @returns {Object<response>}
 */
const removeBackground = async (url, data, apikey ) => {
  try {
    // Make an external api call to background removal service.
    const response = await axios.post(url, data, { headers: {
      'X-Api-Key': apikey,
      'content-type': 'application/json',
      'Accept': 'application/json'
    }});
    
    // Returns result
    return response.data;
  } catch(e) {
    // Logs error
    logger.error(e.response);
  }
}

module.exports = {
  removeBackground
};