'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                firstName: 'Иван',
                lastName: 'Иванов',
                email: 'ivanov@email.com',
                password: 'password',
                role: 'admin',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Пётр',
                lastName: 'Петров',
                email: 'petrov@email.com',
                password: 'password',
                role: 'admin',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Михаил',
                lastName: 'Михайлов',
                email: 'mihailov@email.com',
                password: 'password',
                role: 'admin',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
