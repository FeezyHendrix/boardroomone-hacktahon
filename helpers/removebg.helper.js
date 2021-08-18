const axios = require('axios').default;
const logger = require('../utils/logger');

const removeBackground = async (url, formData, apikey ) => {
  try {
    const response = await axios.post(url, formData, { headers: {
      'X-Api-Key': apikey,
      'content-type': 'application/json',
      'Accept': 'application/json'
    }});
  
    return response.data;
  } catch(e) {
    console.log(e.response.data)
    logger.error(e.response);
  }

}


module.exports = {
  removeBackground
};