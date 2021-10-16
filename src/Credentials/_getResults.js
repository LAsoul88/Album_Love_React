import _getToken from './_getToken';

const _getResults = async () => {

  const limit = 10;
  const query = 'erykah';
  const token = await _getToken();

  const result = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=album&market=US&limit=${limit}`, {
    method: 'GET',
    headers: { 'Authorization' : 'Bearer ' + token }
  });
  
  const data = await result.json();
  return data;
};

export default _getResults;