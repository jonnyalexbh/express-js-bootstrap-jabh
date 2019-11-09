const logger = require('../logger');
const errors = require('../errors');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    underscored: true,
  });

  User.getAll = () => User.findAll().catch((err) => {
    logger.error(err);
    throw errors.databaseError(err);
  });

  User.getOne = (user) => User.findOne({ where: user }).catch((err) => {
    logger.error(err);
    throw errors.databaseError(err);
  });

  return User;
};
