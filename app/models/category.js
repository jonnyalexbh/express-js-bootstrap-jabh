module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {});
  Category.associate = () => {
    // associations can be defined here
  };
  return Category;
};
