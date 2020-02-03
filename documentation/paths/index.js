const user = require('./user');
const album = require('./album');

module.exports = { ...user, ...album };
