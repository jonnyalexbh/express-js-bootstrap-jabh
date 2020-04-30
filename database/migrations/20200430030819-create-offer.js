module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('offers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    type_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'types',
        key: 'id',
      },
    },
    state_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'states',
        key: 'id',
      },
    },
    start_date: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    end_date: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    start_time: {
      type: Sequelize.TIME,
      allowNull: true,
    },
    end_time: {
      type: Sequelize.TIME,
      allowNull: true,
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    day_of_week: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      allowNull: true,
    },
    pdv: {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      allowNull: true,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('offers'),
};
