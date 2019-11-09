const bcrypt = require('bcryptjs');
const config = require('../config/index');

const { saltSync } = config.common.encryption;
const salt = bcrypt.genSaltSync(saltSync);

exports.encryptPassword = (password) => bcrypt.hashSync(password, salt);
