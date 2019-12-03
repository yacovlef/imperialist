'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Materials', [
      {
          quantity: 1,
          price: 100,
          ProductId: 1,
          NomenclatureId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        quantity: 2,
        price: 10,
        ProductId: 1,
        NomenclatureId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        quantity: 3,
        price: 1000,
        ProductId: 1,
        NomenclatureId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
