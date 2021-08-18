const axios = require('axios').default;


const removeBackground = async (url, formData, apikey ) => {
  const response = await axios.post(url, formData, { headers: {
    'X-Api-Key': apikey,
  }});


  return response;
}


module.exports = {
  removeBackground
};