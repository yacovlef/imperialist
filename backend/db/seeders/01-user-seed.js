'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                firstName: 'Иван',
                lastName: 'Иванов',
                email: 'ivanov@email.com',
                password: '$2b$10$OiWgExvmgEVvHudgMtmBJOcvyX/NzO2EP3g7Co4ZG.mKkb7BlQs32',
                role: 'estimator',
                interest: 0.01,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Михаил',
                lastName: 'Михайлов',
                email: 'mihailov@email.com',
                password: '$2b$10$OiWgExvmgEVvHudgMtmBJOcvyX/NzO2EP3g7Co4ZG.mKkb7BlQs32',
                role: 'molar',
                interest: 0.1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Пётр',
                lastName: 'Петров',
                email: 'petrov@email.com',
                password: '$2b$10$OiWgExvmgEVvHudgMtmBJOcvyX/NzO2EP3g7Co4ZG.mKkb7BlQs32',
                role: 'carpenter',
                interest: 0.2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Pro',
                lastName: 'Imperialist',
                email: 'info@imperialist.pro',
                password: '$2b$10$OiWgExvmgEVvHudgMtmBJOcvyX/NzO2EP3g7Co4ZG.mKkb7BlQs32',
                role: 'admin',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
