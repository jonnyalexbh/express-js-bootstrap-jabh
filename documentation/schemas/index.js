const user = require('./user');
const album = require('./album');

module.exports = {
  ...user,
  ...album,
  Error: {
    type: 'object',
    properties: {
      message: {
        type: 'string',
      },
      internal_code: {
        type: 'string',
      },
    },
  },
};
