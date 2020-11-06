const axios = require('axios');
require('dotenv').config();

module.exports = async function() {
    try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=${process.env.NEWS_API_KEY}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }

};