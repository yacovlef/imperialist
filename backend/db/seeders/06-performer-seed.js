'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Performers', [
      {
        interest: 0.01,
        ProductId: 1,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        interest: 0.01,
        ProductId: 2,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        interest: 0.1,
        ProductId: 1,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Performers', null, {});
  }
};
