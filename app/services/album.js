const axios = require('axios');
const config = require('../../config');

const baseUri = config.common.albumsApi.url;
const errors = require('../errors');
const logger = require('../logger');

exports.getAlbums = (source) => axios.get(`${baseUri}${source}`)
  .then((response) => response.data)
  .catch((error) => {
    logger.error(error);
    throw errors.albumsApiError(error.message);
  });
