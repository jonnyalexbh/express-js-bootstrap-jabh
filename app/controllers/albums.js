const { getAlbums } = require('../services/album');

exports.allAlbums = (_, res, next) => getAlbums('/albums')
  .then((albums) => {
    res.status(200).send(albums);
  })
  .catch(next);
