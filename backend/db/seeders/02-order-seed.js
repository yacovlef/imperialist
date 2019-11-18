'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Orders', [
            {
                title: 'Вихрь',
                status: 'inWork',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Буря',
                status: 'finished',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Шторм',
                status: 'refused',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
