const axios = require('axios');

exports.getAlbums = () =>
  axios.get('https://jsonplaceholder.typicode.com/5albums')
    .then(response => response.data)
    .catch(err => err);
