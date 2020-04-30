module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    path_image: DataTypes.STRING,
  }, {});
  Image.associate = () => {
    // associations can be defined here
  };
  return Image;
};
