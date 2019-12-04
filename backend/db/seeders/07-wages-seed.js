'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Wages', [
      {
        price: 100,
        PerformerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        price: 500,
        PerformerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        price: 1000,
        PerformerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Wages', null, {});
  }
};
