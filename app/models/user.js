'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    }
  }, {
    underscored: true
  });
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
