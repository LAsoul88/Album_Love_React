const axios = require('axios');
const querystring = require('querystring');
require('dotenv').config();

const client_id = '2f212092437640b08c1577de2c87a6b3';

const client_secret = process.env.CLIENT_SECRET;

const spotifyAuth = {
  headers: {
    'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
};

const getToken = async () => {
  const response = await axios.post('https://accounts.spotify.com/api/token', querystring.stringify({ grant_type: 'client_credentials' }), spotifyAuth);
  return response.data.access_token;
};

const searchQuery = 'voodoo';

const searchReturn = async () => {
  const token = await getToken();
  const query = await axios.get(`https://api.spotify.com/v1/search?q=${searchQuery}&type=album&market=US&limit=2`, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
  console.log(query.data.albums.items[0].images[0]);
  return query.data.albums.items;
};

searchReturn();

module.exports = searchReturn;