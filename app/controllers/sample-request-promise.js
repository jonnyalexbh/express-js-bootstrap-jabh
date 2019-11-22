const request = require('request-promise');

const options = {
  uri: 'https://jsonplaceholder.typicode.com/albums',
  json: true,
};

exports.promiseAlbums = async (req, res) => {
  const albums = await request(options);
  res.send(albums);
};

const optionsTwo = {
  uri: 'https://jsonplaceholder.typicode.com/albums',
  resolveWithFullResponse: true,
  time: true,
  json: true,
};

exports.promiseAlbumsTwo = (req, res) => {
  request(optionsTwo)
    .then((info) => {
      res.send(info);
    })
    .catch((err) => {
      res.send(err);
    });
};
