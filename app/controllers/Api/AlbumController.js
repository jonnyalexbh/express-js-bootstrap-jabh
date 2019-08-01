const { getAlbums } = require('../../services/album');

exports.all = (_, res, next) =>
  getAlbums()
    .then(albums => {
      res.send(albums);
    })
    .catch(next);
