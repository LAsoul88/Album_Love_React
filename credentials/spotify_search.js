const axios = require('axios');

const getToken = require('./spotify_auth');


const searchReturn = async (searchQuery) => {
  const token = await getToken();
  const query = await axios.get(`https://api.spotify.com/v1/search?q=${searchQuery}&type=album&market=US&limit=10`, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
  /* console.log(query.data.albums.items[0].images[0]); */
  return query.data.albums.items;
};

module.exports = searchReturn;