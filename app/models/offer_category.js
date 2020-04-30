module.exports = (sequelize, DataTypes) => {
  const OfferCategory = sequelize.define('OfferCategory', {
    offer_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
  }, {});
  OfferCategory.associate = () => {
    // associations can be defined here
  };
  return OfferCategory;
};
