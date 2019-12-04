'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Performers', [
      {
        interest: 5,
        ProductId: 1,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        interest: 10,
        ProductId: 1,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        interest: 5,
        ProductId: 2,
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Performers', null, {});
  }
};
