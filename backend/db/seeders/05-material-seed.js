'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Materials', [
      {
          quantity: 1,
          price: 100,
          ProjectId: 1,
          NomenclatureId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        quantity: 2,
        price: 10,
        ProjectId: 1,
        NomenclatureId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 3,
        price: 1000,
        ProjectId: 1,
        NomenclatureId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
