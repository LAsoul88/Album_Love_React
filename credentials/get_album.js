const axios = require('axios');

const getToken = require('./spotify_auth');

const getAlbum = async (id) => {
  const token = await getToken();
  const target = await axios.get(`https://api.spotify.com/v1/albums/${id}`, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });
  /* console.log(target.data.name); */
  return target.data;
};

const obtainId = async () => {
  // pull id from the dom?
  // I'm using a form, so maybe this logic belongs there
};

getAlbum('3cADvHRdKniF9ELCn1zbGH');

module.exports = getAlbum;