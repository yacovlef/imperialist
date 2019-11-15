const {
    userController,
    authController
} = require('../app/controllers');

module.exports = (app) => {
    // userList
    app.get('/api/users', userController.getList);
    app.post('/api/users', userController.create);
    app.put('/api/users/:id', userController.update);
    app.delete('/api/users/:id', userController.remove);

    //auth
    app.post('/api/login', authController.login);
}
