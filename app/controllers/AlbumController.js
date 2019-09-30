const { getAlbums } = require('../services/album');

exports.all = (_, res, next) =>
  getAlbums()
    .then(albums => {
      res.send(albums);
    })
    .catch(next);

exports.allAlbums = async (req, res, next) => {
  try {
    const albums = await getAlbums();
    res.status(200).send(albums);
  } catch (err) {
    next(err);
  }
}
