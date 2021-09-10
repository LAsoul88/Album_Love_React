const axios = require('axios');

const getToken = require('./spotify_auth');

const getAlbums = async (arr) => {
  let url = `https://api.spotify.com/v1/albums?ids=`;
  let idChain = ''
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      idChain += arr[i] + '&market=US'
    } else {
    idChain += arr[i] + '%2C';
  }
}
url += idChain;

const token = await getToken();
const targets = await axios.get(url, {
  headers: {
    'Authorization': 'Bearer ' + token
  }
});
  // console.log('==========')
  // console.log(targets);
  // console.log('==========')
  return targets.data.albums;
};

module.exports = getAlbums;