'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Nomenclature', [
      {
          name: 'МДФ',
          unit: 'list',
          price: 100,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: 'Направляющие',
          unit: 'sht',
          price: 200,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          name: 'Шпонировка',
          unit: 'mkv',
          price: 300,
          createdAt: new Date(),
          updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Nomenclature', null, {});
  }
};
