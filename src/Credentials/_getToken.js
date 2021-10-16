const clientId = '2f212092437640b08c1577de2c87a6b3';
const clientSecret = 'e587869e784943bd91f1ba87094b4067';

const _getToken = async () => {

  const result = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
      'Authorization' : 'Basic ' + btoa( clientId + ':' + clientSecret)
    },
    body: 'grant_type=client_credentials'
  });

  const data = await result.json();
  return data.access_token;
}

export default _getToken;