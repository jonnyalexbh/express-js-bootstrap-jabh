module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    name: DataTypes.STRING,
  }, {});
  Type.associate = () => {
    // associations can be defined here
  };
  return Type;
};
