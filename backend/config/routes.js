const {
    userController,
    authController
} = require('../app/controllers');

const { authMiddleware } = require('../app/middlewares');

module.exports = (app) => {
    // userList
    app.get('/api/users', authMiddleware, userController.getList);
    app.post('/api/users', authMiddleware, userController.create);
    app.put('/api/users/:id', authMiddleware, userController.update);
    app.delete('/api/users/:id', authMiddleware, userController.remove);

    //auth
    app.post('/api/login', authController.login);
}
