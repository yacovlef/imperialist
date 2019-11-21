'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [
      {
          name: 'Стол',
          status: 'devDoc',
          OrderId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: 'Стул',
          status: 'manufacturing',
          OrderId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: 'Шкаф',
          status: 'painting',
          OrderId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
