'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
          name: 'Стол',
          status: 'devDoc',
          ProjectId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: 'Стул',
          status: 'manufacturing',
          ProjectId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: 'Шкаф',
          status: 'painting',
          ProjectId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
