const { User } = require('../models');
const errors = require('../errors');
const logger = require('../logger');

exports.createUser = (user) => User.create(user)
  .then((result) => {
    logger.info(`user with name ${user.firstName} created!`);
    return result;
  })
  .catch((error) => {
    logger.error(`Could not create user: ${user.firstName}`);
    throw errors.databaseError(error.message);
  });

exports.allUsers = () => User.getAll().then();

exports.getUser = (id) => User.getOne(id).then();
