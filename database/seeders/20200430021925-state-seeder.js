
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('states', [
    {
      name: 'Open',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Closed',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ], {}),


  down: () => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
