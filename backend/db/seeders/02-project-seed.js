'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Projects', [
            {
                title: 'Вихрь',
                status: 'inWork',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Буря',
                status: 'ready',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Шторм',
                status: 'loaded',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Снег',
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
