module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offer', {
    type_id: DataTypes.INTEGER,
    state_id: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME,
    active: DataTypes.BOOLEAN,
    day_of_week: DataTypes.ARRAY(DataTypes.INTEGER),
    pdv: DataTypes.ARRAY(DataTypes.INTEGER),
  }, {});
  Offer.associate = (models) => {
    Offer.belongsTo(models.State, { foreignKey: 'state_id' });
  };
  return Offer;
};
